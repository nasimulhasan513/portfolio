import { ArrowUpRight } from "lucide-react";

export default function LiveProjectButton({
  href,
  label = "live project",
}: {
  href: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-xs lowercase tracking-[0.15em] text-ink transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-3"
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
