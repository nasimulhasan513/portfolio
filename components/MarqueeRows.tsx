"use client";

import { useEffect, useRef, useState } from "react";

function Row({ images, dir }: { images: string[]; dir: 1 | -1 }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div className="flex gap-3" style={{ willChange: "transform" }}>
      {tripled.map((src, i) => (
        <div
          key={i}
          className="relative shrink-0 overflow-hidden rounded-2xl bg-base-elev"
          style={{ width: 420, height: 270 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ transform: dir === 1 ? undefined : undefined }}
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeRows({
  rowA,
  rowB,
}: {
  rowA: string[];
  rowB: string[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col gap-3 overflow-hidden">
      <div style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}>
        <Row images={rowA} dir={1} />
      </div>
      <div style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}>
        <Row images={rowB} dir={-1} />
      </div>
    </div>
  );
}
