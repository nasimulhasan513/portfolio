import { ArrowDown } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import Terminal from "./Terminal";

export default function HeroSection() {
  return (
    <section id="top" className="relative" style={{ overflowX: "clip" }}>
      {/* dot grid, faded toward the edges */}
      <div
        className="dot-grid pointer-events-none absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      {/* soft amber glow */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[55vh] w-[55vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-px relative z-10 flex min-h-svh flex-col justify-end pb-10 pt-28 sm:pb-12 lg:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* headline */}
          <div>
            <FadeIn delay={0.05} y={16}>
              <span className="eyebrow">lead backend engineer &amp; cto — dhaka, bangladesh</span>
            </FadeIn>
            <h1 className="mt-6 font-display text-[clamp(3.4rem,12.5vw,10rem)] font-extrabold uppercase leading-[0.88] tracking-tight">
              <FadeIn as="span" delay={0.12} y={40} className="block">
                Nasimul
              </FadeIn>
              <FadeIn as="span" delay={0.2} y={40} className="text-outline block">
                Hasan
              </FadeIn>
              <FadeIn as="span" delay={0.28} y={40} className="block">
                Deep<span className="text-accent">.</span>
              </FadeIn>
            </h1>
            <FadeIn
              as="p"
              delay={0.4}
              y={20}
              className="mt-7 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              I build the systems people don&apos;t see — and notice instantly when they fail.
              Learning platforms and online stores, kept fast, safe, and online for tens of
              thousands of people across Bangladesh.
            </FadeIn>
          </div>

          {/* terminal */}
          <FadeIn delay={0.5} y={30}>
            <Terminal />
          </FadeIn>
        </div>

        {/* bottom strip */}
        <FadeIn
          delay={0.7}
          y={10}
          className="mt-12 flex items-center justify-between border-t border-line pt-5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-muted sm:mt-14"
        >
          <a href="#about" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            scroll
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
          <span className="hidden sm:inline">systems that stay online</span>
          <span>23.81°N / 90.41°E</span>
        </FadeIn>
      </div>
    </section>
  );
}
