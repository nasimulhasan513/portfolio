import { ArrowUpRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";

type Experience = {
  role: string;
  company: string;
  url?: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    role: "Chief Technology Officer",
    company: "Rhombus Publications",
    url: "https://rhombuspublications.com/",
    period: "sep 2024 — now",
    current: true,
    summary: "Leading all technology for an online bookstore and education brand.",
    points: [
      "Built the full online store — from browsing books to checkout and delivery.",
      "Set up automatic order tracking and SMS/email updates for customers.",
      "Created sales dashboards so the team can see what's working at a glance.",
      "Made the site noticeably faster by improving how data is stored and fetched.",
    ],
  },
  {
    role: "Tech Lead",
    company: "ACS Future School",
    url: "https://acsfutureschool.com/about-us",
    period: "oct 2024 — now",
    current: true,
    summary: "Leading the behind-the-scenes systems of an online learning platform.",
    points: [
      "Built the core systems for students, teachers, and admins to work together.",
      "Added real-time chat and instant notifications.",
      "Automated routine tasks like scheduling and reporting.",
      "Kept the platform stable and online for thousands of daily users.",
    ],
  },
  {
    role: "Technical Project Executive",
    company: "10 Minute School",
    period: "feb 2022 — jul 2022",
    summary: "Supported product and workflow automation at Bangladesh's largest ed-tech.",
    points: [
      "Built tools that made everyday team workflows faster.",
      "Worked across teams to help roll out new features.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 bg-base-soft py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            track record
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          >
            Experience
          </FadeIn>
        </div>

        <ol className="mt-14 border-t border-line">
          {experiences.map((job, i) => (
            <FadeIn
              as="li"
              key={`${job.role}-${job.company}`}
              delay={i * 0.08}
              className="grid gap-5 border-b border-line py-9 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-12"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-ink-muted">{job.period}</p>
                {job.current && (
                  <p className="mt-2 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    live now
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {job.role}
                </h3>
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1 inline-flex items-center gap-1.5 font-medium text-ink-soft transition-colors hover:text-accent"
                  >
                    {job.company}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-ink-soft">{job.company}</p>
                )}
                <p className="mt-4 text-lg font-medium text-ink">{job.summary}</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-ink-soft">
                      <span className="mt-1 shrink-0 font-mono text-xs text-accent">→</span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
