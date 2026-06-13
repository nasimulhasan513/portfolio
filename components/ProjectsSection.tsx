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
  gradient: string;
};

const featured: Project[] = [
  {
    name: "ACS Future School",
    logo: "/projects/acsfutureschool-logo.png",
    url: "https://acsfutureschool.com/",
    category: "Lead Backend Engineer",
    blurb:
      "Bangladesh's leading online school — live classes, quizzes, and exam prep for classes 6–10 and admission tests, stable for thousands of daily users.",
    gradient: "radial-gradient(circle at 30% 30%, #7621B0 0%, #18011F 70%)",
  },
  {
    name: "Rhombus Publications",
    logo: "/projects/rhombuspublications-logo.svg",
    url: "https://rhombuspublications.com/",
    category: "Chief Technology Officer",
    blurb:
      "An online store for HSC academic and admission books — full ordering, payments, and delivery tracking, with automated SMS/email updates.",
    gradient: "radial-gradient(circle at 70% 30%, #B600A8 0%, #18011F 70%)",
  },
  {
    name: "Rhombus Publications App",
    logo: "/projects/rhombusapp-logo.png",
    url: "https://play.google.com/store/apps/details?id=com.education.rhombus",
    category: "Android · Google Play",
    blurb:
      "The Rhombus mobile app — HSC and admission study materials in students' pockets, backed by the same reliable systems.",
    gradient: "radial-gradient(circle at 50% 30%, #BE4C00 0%, #18011F 70%)",
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
    <div ref={ref} className="sticky top-24 flex justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full origin-top overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-base p-5 sm:rounded-[50px] sm:p-7 md:rounded-[60px] md:p-9"
      >
        {/* top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[clamp(2.5rem,8vw,110px)] font-black leading-none text-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-muted">
                {project.category}
              </span>
              <h3 className="text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        {/* body */}
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-5">
          <p className="self-end text-base font-light leading-relaxed text-ink-soft sm:col-span-2 sm:text-lg">
            {project.blurb}
          </p>
          <div
            className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[28px] sm:col-span-3 sm:rounded-[40px]"
            style={{ background: project.gradient }}
          >
            <div className="relative h-20 w-44 sm:h-28 sm:w-64">
              <Image src={project.logo} alt={project.name} fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-base px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            Selected work
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="hero-heading mt-5 text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
          >
            Projects
          </FadeIn>
        </div>

        {/* Sticky-stacking featured cards */}
        <div className="mt-12 flex flex-col gap-6">
          {featured.map((p, i) => (
            <StackingCard key={p.name} project={p} index={i} total={featured.length} />
          ))}
        </div>

        {/* Supporting grid */}
        <div className="mt-24">
          <FadeIn as="h3" className="mb-8 font-mono text-sm uppercase tracking-widest text-ink-muted">
            More products i&apos;ve built
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((p, i) => (
              <FadeIn key={p.name} delay={(i % 3) * 0.08}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-base-soft p-6 transition-colors hover:border-[#D7E2EA]/40 hover:bg-base-elev"
                >
                  <div className="flex items-center justify-between">
                    <div className="relative h-10 w-28">
                      <Image src={p.logo} alt={p.name} fill className="object-contain object-left" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-ink">{p.name}</h4>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ink-soft">{p.blurb}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
