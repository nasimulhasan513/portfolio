import { Globe, Clapperboard } from "lucide-react";
import { getVisiblePhotos } from "@/lib/gallery";
import GalleryGrid from "./GalleryGrid";
import FadeIn from "./ui/FadeIn";

const countries = [
  { name: "India", flag: "🇮🇳" },
  { name: "Maldives", flag: "🇲🇻" },
  { name: "Sri Lanka", flag: "🇱🇰" },
];

export default async function GallerySection() {
  const photos = await getVisiblePhotos();

  return (
    <section id="gallery" className="scroll-mt-24 bg-base py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            Off the clock
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-[0.95] tracking-tight"
          >
            Life outside <span className="brand-text">the code</span>
          </FadeIn>
          <FadeIn as="p" delay={0.1} className="mt-5 text-lg font-light text-ink-soft">
            Travel, friends, and everyday moments. Tap any photo to view it larger.
          </FadeIn>

          {/* Travels */}
          <FadeIn delay={0.15} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-ink-muted">
              <Globe className="h-4 w-4 text-grad-2" />
              Countries visited
            </span>
            <ul className="flex flex-wrap gap-2">
              {countries.map((c) => (
                <li
                  key={c.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base-elev px-3 py-1 text-sm font-medium text-ink-soft"
                >
                  <span aria-hidden="true">{c.flag}</span>
                  {c.name}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 text-sm text-ink-muted">
              <Clapperboard className="h-4 w-4" />
              Travel film — coming soon
            </span>
          </FadeIn>
        </div>

        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}
