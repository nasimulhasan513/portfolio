"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis, restrictToParentElement } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Eye, EyeOff, Save, LogOut } from "lucide-react";
import type { AdminPhoto } from "@/lib/gallery";

function SortableRow({
  photo,
  index,
  onToggle,
}: {
  photo: AdminPhoto;
  index: number;
  onToggle: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: photo.src });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex items-center gap-3 rounded-xl border p-2 ${
        isDragging ? "z-10 border-primary-600 shadow-lg" : "border-slate-200"
      } ${photo.visible ? "bg-white" : "bg-slate-50 opacity-60"}`}
    >
      <button
        {...attributes}
        {...listeners}
        aria-label="Drag to reorder"
        className="cursor-grab touch-none rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 active:cursor-grabbing"
      >
        <GripVertical className="h-5 w-5" />
      </button>
      <span className="w-6 text-right font-mono text-xs text-slate-400">{index + 1}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className="h-14 w-14 shrink-0 rounded-lg object-cover" />
      <span className="min-w-0 flex-1 truncate text-sm text-slate-700">
        {photo.src.replace("/gallery/web/", "")}
      </span>
      <button
        onClick={onToggle}
        title={photo.visible ? "Hide" : "Show"}
        className="rounded-lg p-2 hover:bg-slate-100"
      >
        {photo.visible ? (
          <Eye className="h-4 w-4 text-slate-700" />
        ) : (
          <EyeOff className="h-4 w-4 text-slate-400" />
        )}
      </button>
    </li>
  );
}

export default function AdminGallery({ initialPhotos }: { initialPhotos: AdminPhoto[] }) {
  const router = useRouter();
  const [photos, setPhotos] = useState(initialPhotos);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    setPhotos((items) => {
      const from = items.findIndex((p) => p.src === active.id);
      const to = items.findIndex((p) => p.src === over.id);
      return arrayMove(items, from, to);
    });
    setDirty(true);
  }

  function toggle(index: number) {
    setPhotos((items) =>
      items.map((p, i) => (i === index ? { ...p, visible: !p.visible } : p))
    );
    setDirty(true);
  }

  async function save() {
    setSaving(true);
    setStatus(null);
    const updates = photos.map((p, i) => ({ src: p.src, sortOrder: i, visible: p.visible }));
    const res = await fetch("/api/admin/gallery", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ updates }),
    });
    setSaving(false);
    if (res.ok) {
      setDirty(false);
      setStatus("Saved — the homepage gallery is updated.");
    } else if (res.status === 401) {
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus(data.error ?? "Save failed");
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  const visibleCount = photos.filter((p) => p.visible).length;

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="sticky top-0 z-20 -mx-6 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur">
        <div>
          <h1 className="text-xl font-semibold">Gallery admin</h1>
          <p className="text-sm text-slate-500">
            {photos.length} photos · {visibleCount} visible · drag to reorder
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={save}
            disabled={!dirty || saving}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving…" : "Save"}
          </button>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {status && <p className="mt-4 text-sm text-emerald-700">{status}</p>}
      {dirty && !status && <p className="mt-4 text-sm text-amber-700">Unsaved changes.</p>}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      >
        <SortableContext items={photos.map((p) => p.src)} strategy={verticalListSortingStrategy}>
          <ul className="mt-6 space-y-2">
            {photos.map((p, i) => (
              <SortableRow key={p.src} photo={p} index={i} onToggle={() => toggle(i)} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </main>
  );
}
