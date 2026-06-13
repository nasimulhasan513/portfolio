import { db, ensureSchema } from "./db";

export type Photo = {
  src: string;
  alt: string;
  w?: number;
  h?: number;
};

export type AdminPhoto = Photo & {
  sortOrder: number;
  visible: boolean;
};

/** Visible photos in admin-defined order — used by the public gallery. */
export async function getVisiblePhotos(): Promise<Photo[]> {
  await ensureSchema();
  const rs = await db.execute(
    "SELECT src, alt, w, h FROM gallery_photos WHERE visible = 1 ORDER BY sort_order ASC, src ASC"
  );
  return rs.rows.map((r) => ({
    src: r.src as string,
    alt: r.alt as string,
    w: (r.w as number | null) ?? undefined,
    h: (r.h as number | null) ?? undefined,
  }));
}

/** Every photo (incl. hidden) in order — used by the admin screen. */
export async function getAllPhotos(): Promise<AdminPhoto[]> {
  await ensureSchema();
  const rs = await db.execute(
    "SELECT src, alt, w, h, sort_order, visible FROM gallery_photos ORDER BY sort_order ASC, src ASC"
  );
  return rs.rows.map((r) => ({
    src: r.src as string,
    alt: r.alt as string,
    w: (r.w as number | null) ?? undefined,
    h: (r.h as number | null) ?? undefined,
    sortOrder: r.sort_order as number,
    visible: Boolean(r.visible),
  }));
}

export type PhotoUpdate = { src: string; sortOrder: number; visible: boolean };

/** Persist new ordering + visibility for the given photos in one transaction. */
export async function savePhotoOrder(updates: PhotoUpdate[]): Promise<void> {
  await ensureSchema();
  const tx = await db.transaction("write");
  try {
    for (const u of updates) {
      await tx.execute({
        sql: "UPDATE gallery_photos SET sort_order = ?, visible = ? WHERE src = ?",
        args: [u.sortOrder, u.visible ? 1 : 0, u.src],
      });
    }
    await tx.commit();
  } catch (e) {
    await tx.rollback();
    throw e;
  }
}

/**
 * Seed the table from a manifest the first time, and reconcile with disk:
 * insert rows that are new, drop rows whose file no longer exists. Existing
 * rows keep their admin-set order/visibility. Safe to run repeatedly.
 */
export async function seedFromManifest(manifest: Photo[]): Promise<void> {
  await ensureSchema();
  const rs = await db.execute("SELECT src, sort_order FROM gallery_photos");
  const existing = new Map(rs.rows.map((r) => [r.src as string, r.sort_order as number]));
  const manifestSrcs = new Set(manifest.map((p) => p.src));

  let nextOrder = existing.size ? Math.max(...existing.values()) + 1 : 0;

  const tx = await db.transaction("write");
  try {
    // Insert new photos at the end, preserving manifest order.
    for (const p of manifest) {
      if (existing.has(p.src)) {
        // Keep order/visibility; refresh metadata in case dimensions changed.
        await tx.execute({
          sql: "UPDATE gallery_photos SET alt = ?, w = ?, h = ? WHERE src = ?",
          args: [p.alt, p.w ?? null, p.h ?? null, p.src],
        });
      } else {
        await tx.execute({
          sql: "INSERT INTO gallery_photos (src, alt, w, h, sort_order, visible) VALUES (?, ?, ?, ?, ?, 1)",
          args: [p.src, p.alt, p.w ?? null, p.h ?? null, nextOrder++],
        });
      }
    }
    // Remove photos no longer present in the manifest (deleted from disk).
    for (const src of existing.keys()) {
      if (!manifestSrcs.has(src)) {
        await tx.execute({ sql: "DELETE FROM gallery_photos WHERE src = ?", args: [src] });
      }
    }
    await tx.commit();
  } catch (e) {
    await tx.rollback();
    throw e;
  }
}
