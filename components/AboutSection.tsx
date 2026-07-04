import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import AnimatedText from "./ui/AnimatedText";

const BIO =
  "For the last few years I've led the engineering behind learning platforms and an online store used by tens of thousands of people across Bangladesh. As CTO at Rhombus Publications and Lead Backend Engineer at ACS Future School, I help teams ship products that actually work — and stay working.";

const facts = [
  { label: "role", value: "lead backend engineer @ acs future school" },
  { label: "also", value: "cto @ rhombus publications" },
  { label: "base", value: "dhaka, bangladesh" },
  { label: "status", value: "open to interesting problems", live: true },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-px grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* portrait */}
        <FadeIn x={-30} y={0} className="mx-auto w-full max-w-md lg:sticky lg:top-28">
          <figure className="overflow-hidden rounded-2xl border border-line bg-base-soft">
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait of Nasimul Hasan Deep"
              width={640}
              height={800}
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-[0.68rem] tracking-[0.15em] text-ink-muted">
              <span>dhaka, bd</span>
              <span>portrait.jpg</span>
            </figcaption>
          </figure>
        </FadeIn>

        {/* copy */}
        <div>
          <FadeIn as="span" className="eyebrow">
            about
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 font-display text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-[1.04] tracking-tight"
          >
            I build the part of the product you don&apos;t see<span className="text-accent">.</span>
          </FadeIn>

          <AnimatedText
            text={BIO}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink sm:text-xl"
          />

          <dl className="mt-10 border-t border-line">
            {facts.map((f) => (
              <FadeIn
                key={f.label}
                as="div"
                className="grid grid-cols-[90px_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[120px_1fr]"
              >
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                  {f.label}
                </dt>
                <dd className="m-0 font-mono text-sm text-ink-soft">
                  {f.live && (
                    <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent align-middle" />
                  )}
                  {f.value}
                </dd>
              </FadeIn>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
