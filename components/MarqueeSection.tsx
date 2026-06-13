import { getVisiblePhotos } from "@/lib/gallery";
import MarqueeRows from "./MarqueeRows";

export default async function MarqueeSection() {
  const photos = await getVisiblePhotos();
  const srcs = photos.map((p) => p.src);

  // Split into two rows; fall back gracefully if few photos.
  const half = Math.ceil(srcs.length / 2);
  const rowA = srcs.slice(0, half);
  const rowB = srcs.slice(half);

  if (srcs.length === 0) return null;

  return (
    <section className="bg-base pb-10 pt-24 sm:pt-32 md:pt-40">
      <MarqueeRows rowA={rowA} rowB={rowB} />
    </section>
  );
}
