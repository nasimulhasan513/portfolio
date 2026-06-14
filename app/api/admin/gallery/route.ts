import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthed } from "@/lib/auth";
import { savePhotoOrder, type PhotoUpdate } from "@/lib/gallery";

export async function PATCH(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const raw = body?.updates;
  if (!Array.isArray(raw)) {
    return NextResponse.json({ error: "Expected { updates: [...] }" }, { status: 400 });
  }

  const updates: PhotoUpdate[] = [];
  for (const u of raw) {
    if (typeof u?.src !== "string" || typeof u?.sortOrder !== "number" || typeof u?.visible !== "boolean") {
      return NextResponse.json({ error: "Invalid update item" }, { status: 400 });
    }
    updates.push({ src: u.src, sortOrder: u.sortOrder, visible: u.visible });
  }

  try {
    await savePhotoOrder(updates);
  } catch (e) {
    const code = (e as NodeJS.ErrnoException)?.code;
    if (code === "EROFS" || code === "EACCES") {
      return NextResponse.json(
        {
          error:
            "Read-only filesystem. The gallery is edited locally: run the site with `pnpm dev`, save here, then commit & push gallery-manifest.json.",
        },
        { status: 409 }
      );
    }
    throw e;
  }
  revalidatePath("/"); // refresh the public gallery on the homepage
  return NextResponse.json({ ok: true });
}
