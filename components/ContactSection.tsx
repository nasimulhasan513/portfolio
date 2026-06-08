import { Mail, Github, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28 scroll-mt-16 border-t border-slate-200">
      <div className="container-narrow reveal-up text-center">
        <span className="eyebrow justify-center">06 — Contact</span>
        <h2 className="mt-4 text-3xl sm:text-4xl">Let&apos;s work together</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Have a project in mind or just want to say hello? I&apos;m happy to chat —
          the easiest way to reach me is by email.
        </p>

        <a
          href="mailto:contact@nasimulhasan.me"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
        >
          <Mail className="h-5 w-5" />
          contact@nasimulhasan.me
        </a>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://github.com/nasimulhasan513"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-ink-soft hover:border-ink hover:text-ink transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nasimulhasandeep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-ink-soft hover:border-ink hover:text-ink transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/nasimulhasandeep/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-ink-soft hover:border-ink hover:text-ink transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/nasimulhasandeep1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-ink-soft hover:border-ink hover:text-ink transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <a
          href="#about"
          className="mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-primary-600"
        >
          Back to top
          <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
        </a>
      </div>
    </section>
  );
}
