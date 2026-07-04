import { Globe, Clapperboard } from "lucide-react";
import { getVisiblePhotos } from "@/lib/gallery";
import GalleryGrid from "./GalleryGrid";
import MarqueeRows from "./MarqueeRows";
import FadeIn from "./ui/FadeIn";

const countries = [
  { name: "India", flag: "🇮🇳" },
  { name: "Maldives", flag: "🇲🇻" },
  { name: "Sri Lanka", flag: "🇱🇰" },
];

export default async function GallerySection() {
  const photos = await getVisiblePhotos();
  const srcs = photos.map((p) => p.src);
  const half = Math.ceil(srcs.length / 2);

  return (
    <section id="gallery" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            off the clock
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          >
            Life outside the code
          </FadeIn>
          <FadeIn as="p" delay={0.1} className="mt-5 text-lg text-ink-soft">
            Travel, friends, and everyday moments. Tap any photo to view it larger.
          </FadeIn>

          {/* Travels */}
          <FadeIn delay={0.15} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
              <Globe className="h-4 w-4 text-accent" />
              countries visited
            </span>
            <ul className="flex flex-wrap gap-2">
              {countries.map((c) => (
                <li
                  key={c.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base-elev px-3 py-1 font-mono text-sm text-ink-soft"
                >
                  <span aria-hidden="true">{c.flag}</span>
                  {c.name}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 font-mono text-sm text-ink-muted">
              <Clapperboard className="h-4 w-4" />
              travel film — coming soon
            </span>
          </FadeIn>
        </div>
      </div>

      {srcs.length > 0 && (
        <div className="mt-14">
          <MarqueeRows rowA={srcs.slice(0, half)} rowB={srcs.slice(half)} />
        </div>
      )}

      <div className="container-px">
        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}
