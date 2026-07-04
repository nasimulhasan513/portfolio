import { Github, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import ContactButton from "./ui/ContactButton";

const socials = [
  { label: "GitHub", href: "https://github.com/nasimulhasan513", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nasimulhasandeep", Icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/nasimulhasandeep/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/nasimulhasandeep1/", Icon: Instagram },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[85vh] scroll-mt-20 flex-col items-center justify-center overflow-hidden bg-base-soft px-5 py-24 text-center sm:px-8 md:px-10"
    >
      {/* dot grid + glow */}
      <div
        className="dot-grid pointer-events-none absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 60% 55% at 50% 50%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 50%, black 20%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center">
        <FadeIn as="span" className="eyebrow">
          contact
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.05}
          className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
        >
          Let&apos;s build something <span className="text-outline">reliable</span>
          <span className="text-accent">.</span>
        </FadeIn>
        <FadeIn as="p" delay={0.1} className="mt-7 max-w-md text-lg text-ink-soft">
          Have a project in mind or just want to say hello? I&apos;m happy to chat — the easiest
          way to reach me is by email.
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10">
          <ContactButton href="mailto:contact@nasimulhasan.me" label="contact@nasimulhasan.me" />
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 flex items-center justify-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </FadeIn>

        <a
          href="#top"
          className="mt-14 inline-flex items-center gap-1.5 font-mono text-xs lowercase tracking-[0.2em] text-ink-muted transition-colors hover:text-accent"
        >
          back to top
          <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
        </a>
      </div>
    </section>
  );
}
