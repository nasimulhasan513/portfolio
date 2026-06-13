import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base py-10">
      <div className="container-px flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold uppercase tracking-tight text-ink">
            Nasimul Hasan Deep
          </p>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} · Built and designed by me.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/nasimulhasan513"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nasimulhasandeep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/nasimulhasandeep/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/nasimulhasandeep1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@nasimulhasan.me"
            aria-label="Email"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
