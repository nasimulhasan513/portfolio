"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
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
          ? "bg-paper/85 backdrop-blur-md border-b border-slate-200"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-ink"
        >
          Deep<span className="text-primary-600">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-primary-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-slate-100"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-paper">
          <div className="container-px flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-base font-medium text-ink-soft hover:text-primary-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
