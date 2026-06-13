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
          ? "border-b border-line bg-base/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-display text-xl font-black uppercase tracking-tight text-ink"
        >
          Deep<span className="brand-text">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider text-ink-soft transition-opacity duration-200 hover:opacity-70"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wider text-white"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              outline: "2px solid #fff",
              outlineOffset: "-3px",
            }}
          >
            Contact
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-base-elev md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-line bg-base md:hidden">
          <div className="container-px flex flex-col py-2">
            {[...navItems, { name: "Contact", href: "#contact" }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-base font-medium uppercase tracking-wider text-ink-soft hover:text-ink"
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
