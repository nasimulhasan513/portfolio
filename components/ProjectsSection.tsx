"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import LiveProjectButton from "./ui/LiveProjectButton";

type Project = {
  name: string;
  logo: string;
  url: string;
  category: string;
  blurb: string;
};

const featured: Project[] = [
  {
    name: "ACS Future School",
    logo: "/projects/acsfutureschool-logo.png",
    url: "https://acsfutureschool.com/",
    category: "tech lead",
    blurb:
      "Bangladesh's leading online school — live classes, quizzes, and exam prep for classes 6–10 and admission tests, stable for thousands of daily users.",
  },
  {
    name: "Rhombus Publications",
    logo: "/projects/rhombuspublications-logo.svg",
    url: "https://rhombuspublications.com/",
    category: "chief technology officer",
    blurb:
      "An online store for HSC academic and admission books — full ordering, payments, and delivery tracking, with automated SMS/email updates.",
  },
  {
    name: "Rhombus Publications App",
    logo: "/projects/rhombusapp-logo.png",
    url: "https://play.google.com/store/apps/details?id=com.education.rhombus",
    category: "android · google play",
    blurb:
      "The Rhombus mobile app — HSC and admission study materials in students' pockets, backed by the same reliable systems.",
  },
];

const supporting = [
  { name: "ACS Porikkha", logo: "/projects/acsporikkha-logo.png", url: "https://acsporikkha.com/", blurb: "An MCQ exam-prep platform for SSC, HSC, admission, and job-test preparation." },
  { name: "ACS Engineering School", logo: "/projects/acsengineeringschool-logo.png", url: "https://acsengineeringschool.com/", blurb: "An online school focused on training tomorrow's engineers." },
  { name: "Rhombus Parallel", logo: "/projects/rhombusparallel-logo.png", url: "https://rhombusparallel.com/", blurb: "A focused online learning hub for HSC Higher Math." },
  { name: "SlackaHead", logo: "/projects/slackahead-logo.png", url: "https://slackahead.com/", blurb: "An ed-tech platform for GRE, GMAT, SAT, TOEFL, IELTS, and PTE preparation." },
  { name: "ACS Mart", logo: "/projects/acsmart-logo.png", url: "https://acsmart.bd/", blurb: "A marketplace where young student entrepreneurs run real shops and serve buyers." },
  { name: "Kidzora", logo: "/projects/kidzora-logo.png", url: "https://kidzora.com/", blurb: "A playful learning and activity platform built for children." },
  { name: "Vinnoora", logo: "/projects/vinnoora-logo.png", url: "https://vinnoora.com/", blurb: "A premium South Asian fashion and lifestyle brand store." },
];

function StackingCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky top-24 flex justify-center md:top-28">
      <motion.article
        style={{ scale, top: `${index * 24}px` }}
        className="relative w-full origin-top overflow-hidden rounded-3xl border border-line bg-base-elev p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.4)] sm:p-8 md:p-10"
      >
        {/* top row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.15em] text-ink-muted">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} —{" "}
              {project.category}
            </span>
            <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {project.name}
            </h3>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        {/* body */}
        <div className="mt-7 grid gap-5 sm:grid-cols-5 sm:gap-8">
          <p className="self-end leading-relaxed text-ink-soft sm:col-span-2 sm:text-lg">
            {project.blurb}
          </p>
          {/* "screen" panel — always dark, like the terminal */}
          <div
            className="dot-grid relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-term-line bg-term-bg sm:col-span-3"
            style={{ "--dot": "rgba(221,211,188,0.12)" } as React.CSSProperties}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 50% 120%, rgba(245,168,60,0.14) 0%, transparent 60%)" }}
            />
            <div className="relative h-20 w-44 sm:h-28 sm:w-64">
              <Image src={project.logo} alt={project.name} fill sizes="256px" className="object-contain drop-shadow-2xl" />
            </div>
            <span className="absolute left-4 top-3 font-mono text-[0.65rem] tracking-[0.18em] text-term-muted">
              ● online
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            shipped &amp; running
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          >
            Projects
          </FadeIn>
        </div>

        {/* Sticky-stacking featured cards */}
        <div className="mt-14 flex flex-col gap-8">
          {featured.map((p, i) => (
            <StackingCard key={p.name} project={p} index={i} total={featured.length} />
          ))}
        </div>

        {/* Supporting grid */}
        <div className="mt-24">
          <FadeIn as="h3" className="eyebrow mb-8">
            more products in production
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((p, i) => (
              <FadeIn key={p.name} delay={(i % 3) * 0.07}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-base-elev p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative inline-block h-12 w-32 rounded-lg border border-term-line bg-term-bg px-3 py-2">
                      <Image src={p.logo} alt={p.name} fill sizes="128px" className="object-contain p-2" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">
                    {p.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.blurb}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
