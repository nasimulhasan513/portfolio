#!/usr/bin/env node
/**
 * Seed / reconcile the gallery_photos table from components/gallery-manifest.json.
 *
 * Local (default):   node scripts/seed-gallery.mjs        -> writes ./local.db
 * Production (Turso): TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... node scripts/seed-gallery.mjs
 *
 * New photos are appended (visible); photos missing from the manifest are
 * removed. Existing rows keep their admin-set order + visibility.
 */
import { createClient } from "@libsql/client";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  await readFile(join(root, "components/gallery-manifest.json"), "utf8")
);

const db = createClient({
  url: process.env.TURSO_DATABASE_URL ?? "file:local.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

await db.execute(`CREATE TABLE IF NOT EXISTS gallery_photos (
  src TEXT PRIMARY KEY, alt TEXT NOT NULL DEFAULT '',
  w INTEGER, h INTEGER,
  sort_order INTEGER NOT NULL DEFAULT 0, visible INTEGER NOT NULL DEFAULT 1
)`);

const rs = await db.execute("SELECT src, sort_order FROM gallery_photos");
const existing = new Map(rs.rows.map((r) => [r.src, r.sort_order]));
const manifestSrcs = new Set(manifest.map((p) => p.src));
let nextOrder = existing.size ? Math.max(...existing.values()) + 1 : 0;

const tx = await db.transaction("write");
let added = 0,
  removed = 0;
try {
  for (const p of manifest) {
    if (existing.has(p.src)) {
      await tx.execute({
        sql: "UPDATE gallery_photos SET alt = ?, w = ?, h = ? WHERE src = ?",
        args: [p.alt, p.w ?? null, p.h ?? null, p.src],
      });
    } else {
      await tx.execute({
        sql: "INSERT INTO gallery_photos (src, alt, w, h, sort_order, visible) VALUES (?, ?, ?, ?, ?, 1)",
        args: [p.src, p.alt, p.w ?? null, p.h ?? null, nextOrder++],
      });
      added++;
    }
  }
  for (const src of existing.keys()) {
    if (!manifestSrcs.has(src)) {
      await tx.execute({ sql: "DELETE FROM gallery_photos WHERE src = ?", args: [src] });
      removed++;
    }
  }
  await tx.commit();
} catch (e) {
  await tx.rollback();
  throw e;
}

console.log(
  `Seeded gallery: ${manifest.length} in manifest, +${added} added, -${removed} removed.`
);
