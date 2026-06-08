import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      {/* Masthead rule */}
      <div className="container-px">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
          <span>Nasimul Hasan Deep</span>
          <span className="hidden sm:inline">Backend Engineer / CTO</span>
        </div>
      </div>

      <div className="container-px relative mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
        {/* Text */}
        <div className="reveal lg:col-span-7">
          <h1 className="font-display text-[2.6rem] leading-[1.04] font-extrabold tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            I build the systems
            <br />
            behind the apps
            <br />
            <span className="text-primary-600">people use every day.</span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
            I&apos;m Nasimul — a backend engineer and CTO. In plain terms: I make
            websites and apps run smoothly, safely, and fast, even when thousands of
            people use them at once.
          </p>

          {/* Roles */}
          <div className="mt-8 grid max-w-md gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            <a
              href="https://acsfutureschool.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white p-4 transition-colors hover:bg-slate-50"
            >
              <span>
                <span className="block font-mono text-[0.7rem] uppercase tracking-widest text-ink-muted">
                  Lead Backend Eng.
                </span>
                <span className="mt-0.5 block font-semibold text-ink">ACS Future School</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://rhombuspublications.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white p-4 transition-colors hover:bg-slate-50"
            >
              <span>
                <span className="block font-mono text-[0.7rem] uppercase tracking-widest text-ink-muted">
                  CTO
                </span>
                <span className="mt-0.5 block font-semibold text-ink">Rhombus Publications</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
            >
              See my work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="reveal lg:col-span-5">
          <figure className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Nasimul Hasan Deep working on a laptop at a café"
                width={787}
                height={1400}
                priority
                sizes="(max-width: 1024px) 24rem, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted">
              <span>Fig. 01 — On the job</span>
              <span>Dhaka</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
