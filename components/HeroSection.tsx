"use client";

import dynamic from "next/dynamic";
import FadeIn from "./ui/FadeIn";
import ContactButton from "./ui/ContactButton";

const HeroObject = dynamic(() => import("./HeroObject"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] flex-col"
      style={{ overflowX: "clip" }}
    >
      {/* 3D core — centred backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[70vh] w-[70vh] max-w-[900px] opacity-90">
          <HeroObject />
        </div>
      </div>

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, #7621B0 0%, transparent 70%)" }}
      />

      {/* Heading block */}
      <div className="container-px relative z-10 mt-auto">
        <FadeIn delay={0.1} y={20}>
          <span className="eyebrow">Nasimul Hasan Deep — Backend Engineer / CTO</span>
        </FadeIn>
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading mt-4 w-full whitespace-nowrap text-[15vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[15vw]"
          >
            i&apos;m nasimul
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-px relative z-10 flex items-end justify-between pb-7 sm:pb-8 md:pb-12">
        <FadeIn
          delay={0.35}
          y={20}
          className="max-w-[180px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-ink sm:max-w-[240px] md:max-w-[300px]"
        >
          a backend engineer &amp; cto building systems that stay fast, safe and online for tens of thousands of people.
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
