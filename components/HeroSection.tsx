import { ArrowDown, ArrowRight, Briefcase, GraduationCap, Rocket } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import Terminal from "./Terminal";

const roles = [
  { Icon: Briefcase, text: "Tech Lead · ACS Future School" },
  { Icon: Rocket, text: "CTO · Rhombus Publications" },
  { Icon: GraduationCap, text: "BSc in CSE · Independent University, Bangladesh" },
];

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
      {/* soft teal glow */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[55vh] w-[55vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-px relative z-10 flex min-h-svh flex-col justify-center pb-10 pt-28 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* intro */}
          <div>
            <FadeIn as="p" delay={0.05} y={16} className="text-lg text-ink-soft">
              Hello, I&apos;m
            </FadeIn>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,6.5vw,4.75rem)] font-extrabold leading-[1.02] tracking-tight">
              <FadeIn as="span" delay={0.12} y={30} className="block">
                Nasimul Hasan Deep<span className="text-accent">.</span>
              </FadeIn>
            </h1>

            {/* roles, scannable at a glance */}
            <FadeIn delay={0.25} y={20} className="mt-6 flex flex-wrap gap-2.5">
              {roles.map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-base-elev px-3.5 py-1.5 text-sm text-ink-soft"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {text}
                </span>
              ))}
            </FadeIn>

            <FadeIn
              as="p"
              delay={0.35}
              y={20}
              className="mt-7 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              I build and look after the technology behind learning platforms and online
              stores used by tens of thousands of students across Bangladesh — keeping
              them fast, safe, and always available.
            </FadeIn>

            <FadeIn delay={0.45} y={16} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-[0.95rem] font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center rounded-full border border-line px-7 text-[0.95rem] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                See my work
              </a>
            </FadeIn>
          </div>

          {/* terminal */}
          <FadeIn delay={0.55} y={30} className="hidden sm:block">
            <Terminal />
          </FadeIn>
        </div>

        {/* bottom strip */}
        <FadeIn
          delay={0.75}
          y={10}
          className="mt-12 flex items-center justify-between border-t border-line pt-5 text-sm text-ink-muted sm:mt-14"
        >
          <a href="#about" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            Scroll to learn more
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </a>
          <span>Dhaka, Bangladesh</span>
        </FadeIn>
      </div>
    </section>
  );
}
