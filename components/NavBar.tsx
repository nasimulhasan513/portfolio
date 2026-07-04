"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ThemeToggle from "./ui/ThemeToggle";

const navItems = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "toolkit", href: "#skills" },
  { name: "gallery", href: "#gallery" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={twMerge(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "border-b border-line bg-base/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold lowercase tracking-tight text-ink"
        >
          deep<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-[0.8rem] lowercase tracking-wide text-ink-soft transition-colors hover:text-accent"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2 font-mono text-[0.8rem] lowercase tracking-wide text-[color:var(--bg)] transition-colors hover:bg-accent hover:text-accent-contrast"
          >
            contact
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-line bg-base md:hidden">
          <div className="container-px flex flex-col py-2">
            {[...navItems, { name: "contact", href: "#contact" }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-line py-3.5 font-mono text-sm lowercase tracking-wide text-ink-soft last:border-b-0 hover:text-accent"
              >
                <span className="mr-2 text-accent">//</span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
