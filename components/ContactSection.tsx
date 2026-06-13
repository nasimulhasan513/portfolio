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
      className="relative flex min-h-[80vh] scroll-mt-24 flex-col items-center justify-center overflow-hidden bg-base px-5 py-24 text-center sm:px-8 md:px-10"
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(circle, #B600A8 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <FadeIn as="span" className="eyebrow">
          Contact
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.05}
          className="hero-heading mt-5 text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          Let&apos;s talk
        </FadeIn>
        <FadeIn as="p" delay={0.1} className="mt-6 max-w-md text-lg font-light text-ink-soft">
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
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-[#D7E2EA] hover:text-ink"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </FadeIn>

        <a
          href="#top"
          className="mt-14 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
        >
          Back to top
          <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
        </a>
      </div>
    </section>
  );
}
