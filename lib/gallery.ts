import { promises as fs } from "fs";
import path from "path";

/**
 * Gallery data lives in components/gallery-manifest.json — the single source of
 * truth, committed to the repo. The public site reads it at BUILD time (SSG, no
 * runtime DB, zero server load), so it works on Vercel with no Turso/SQLite.
 *
 * Display order = array order. A photo with `"hidden": true` is skipped on the
 * public site. The /admin screen edits this file locally (drag-reorder + toggle),
 * then you commit + push and Vercel rebuilds the static page.
 */
export type Photo = { src: string; alt: string; w?: number; h?: number };
export type RawPhoto = Photo & { hidden?: boolean };
export type AdminPhoto = Photo & { sortOrder: number; visible: boolean };

const MANIFEST = path.join(process.cwd(), "components/gallery-manifest.json");

async function readManifest(): Promise<RawPhoto[]> {
  const txt = await fs.readFile(MANIFEST, "utf8");
  return JSON.parse(txt) as RawPhoto[];
}

/** Visible photos, in order — used by the public gallery + marquee (static). */
export async function getVisiblePhotos(): Promise<Photo[]> {
  const all = await readManifest();
  return all
    .filter((p) => !p.hidden)
    .map(({ src, alt, w, h }) => ({ src, alt, w, h }));
}

/** Every photo (incl. hidden) in order — used by the admin screen. */
export async function getAllPhotos(): Promise<AdminPhoto[]> {
  const all = await readManifest();
  return all.map((p, i) => ({
    src: p.src,
    alt: p.alt,
    w: p.w,
    h: p.h,
    sortOrder: i,
    visible: !p.hidden,
  }));
}

export type PhotoUpdate = { src: string; sortOrder: number; visible: boolean };

/**
 * Persist new order + visibility by rewriting the manifest JSON. Works on a
 * writable filesystem (local dev); on Vercel's read-only FS this throws, which
 * is expected — editing is a local-then-commit workflow.
 */
export async function savePhotoOrder(updates: PhotoUpdate[]): Promise<void> {
  const all = await readManifest();
  const bySrc = new Map(all.map((p) => [p.src, p]));
  const ordered = [...updates].sort((a, b) => a.sortOrder - b.sortOrder);

  const next: RawPhoto[] = ordered.map((u) => {
    const base = bySrc.get(u.src) ?? { src: u.src, alt: "" };
    const obj: RawPhoto = { src: base.src, alt: base.alt };
    if (base.w != null) obj.w = base.w;
    if (base.h != null) obj.h = base.h;
    if (!u.visible) obj.hidden = true;
    return obj;
  });

  await fs.writeFile(MANIFEST, JSON.stringify(next, null, 2) + "\n", "utf8");
}
