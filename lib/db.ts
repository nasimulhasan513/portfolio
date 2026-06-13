import { createClient, type Client } from "@libsql/client";

/**
 * libSQL (SQLite) client.
 *
 * - On Vercel: set TURSO_DATABASE_URL + TURSO_AUTH_TOKEN to a hosted Turso db.
 * - Locally / fallback: a SQLite file at ./local.db (no auth token needed).
 *
 * libSQL is a SQLite fork, so the same SQL/API works in both places.
 */
const url = process.env.TURSO_DATABASE_URL ?? "file:local.db";
const authToken = process.env.TURSO_AUTH_TOKEN;

// Reuse the client across hot-reloads / lambda invocations.
const globalForDb = globalThis as unknown as { _libsql?: Client };

export const db: Client =
  globalForDb._libsql ?? createClient({ url, authToken });

if (process.env.NODE_ENV !== "production") globalForDb._libsql = db;

let schemaReady: Promise<void> | null = null;

/** Ensure tables exist. Idempotent; runs once per process. */
export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = db
      .execute(
        `CREATE TABLE IF NOT EXISTS gallery_photos (
           src        TEXT PRIMARY KEY,
           alt        TEXT NOT NULL DEFAULT '',
           w          INTEGER,
           h          INTEGER,
           sort_order INTEGER NOT NULL DEFAULT 0,
           visible    INTEGER NOT NULL DEFAULT 1
         )`
      )
      .then(() => undefined);
  }
  return schemaReady;
}
