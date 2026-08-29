import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const STORE_DIR = path.join(process.cwd(), ".data");

/**
 * Best-effort local JSON append, used as a lightweight record of
 * submissions in Faza 1 (no Supabase/Airtable wired up yet). Email is the
 * source of truth for follow-up — this silently no-ops on read-only
 * filesystems (e.g. serverless production) instead of failing the request.
 */
export async function appendRecord(file: string, record: unknown) {
  try {
    await mkdir(STORE_DIR, { recursive: true });
    const filePath = path.join(STORE_DIR, file);
    let existing: unknown[] = [];
    try {
      const raw = await readFile(filePath, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(record);
    await writeFile(filePath, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.warn(`[store] Could not persist to ${file}:`, err);
  }
}
