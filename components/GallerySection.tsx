import { Globe, Clapperboard } from "lucide-react";
import { getVisiblePhotos } from "@/lib/gallery";
import GalleryGrid from "./GalleryGrid";

const countries = [
  { name: "India", flag: "🇮🇳" },
  { name: "Maldives", flag: "🇲🇻" },
  { name: "Sri Lanka", flag: "🇱🇰" },
];

export default async function GallerySection() {
  const photos = await getVisiblePhotos();

  return (
    <section id="gallery" className="py-20 sm:py-28 scroll-mt-16">
      <div className="container-px">
        <div className="reveal-up max-w-3xl">
          <span className="eyebrow">05 — Gallery</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Life outside the code</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Travel, friends, and everyday moments. Tap any photo to view it larger.
          </p>

          {/* Travels */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-ink-muted">
              <Globe className="h-4 w-4 text-primary-600" />
              Countries visited
            </span>
            <ul className="flex flex-wrap gap-2">
              {countries.map((c) => (
                <li
                  key={c.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-ink-soft"
                >
                  <span aria-hidden="true">{c.flag}</span>
                  {c.name}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-slate-300 px-3 py-1 text-sm text-ink-muted">
              <Clapperboard className="h-4 w-4" />
              Travel film — coming soon
            </span>
          </div>
        </div>

        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}
