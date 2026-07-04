import { ArrowUpRight } from "lucide-react";
import Magnet from "./Magnet";

export default function ContactButton({
  href = "#contact",
  label = "Contact me",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Magnet padding={80} strength={4} className="inline-block">
      <a
        href={href}
        className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-[color:var(--bg)] transition-colors duration-200 hover:bg-accent hover:text-accent-contrast sm:px-10 sm:py-4 sm:text-base"
      >
        {label}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </Magnet>
  );
}
