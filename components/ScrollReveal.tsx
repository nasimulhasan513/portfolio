"use client";

import { useEffect } from "react";

/**
 * Lightweight, tasteful scroll reveal.
 * - Adds `js-reveal` to <html> so elements only hide when JS is active
 *   (no-JS users and crawlers see everything).
 * - Reveals elements with the `.reveal-up` class once, as they enter view.
 * - prefers-reduced-motion is honored via CSS (transitions are neutralized).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      // threshold 0 = reveal as soon as any part enters; works for tall
      // containers (e.g. the gallery) where a % threshold would never trigger.
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
