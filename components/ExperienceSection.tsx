import { ExternalLink } from "lucide-react";

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
    period: "Sep 2024 — Present",
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
    role: "Lead Backend Engineer",
    company: "ACS Future School",
    url: "https://acsfutureschool.com/about-us",
    period: "Oct 2024 — Present",
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
    period: "Feb 2022 — Jul 2022",
    summary: "Supported product and workflow automation at Bangladesh's largest ed-tech.",
    points: [
      "Built tools that made everyday team workflows faster.",
      "Worked across teams to help roll out new features.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-28 scroll-mt-16 border-y border-slate-200">
      <div className="container-px">
        <div className="reveal-up max-w-3xl">
          <span className="eyebrow">02 — Experience</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Where I&apos;ve been working</h2>
        </div>

        <ol className="mt-12 space-y-6">
          {experiences.map((job, i) => (
            <li
              key={`${job.role}-${job.company}`}
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="reveal-up rounded-2xl border border-slate-200 p-6 sm:p-8 sm:grid sm:grid-cols-3 sm:gap-8"
            >
              <div className="sm:col-span-1">
                <div className="flex items-center gap-2">
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-xl">{job.role}</h3>
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 font-medium text-primary-600 hover:text-primary-700"
                  >
                    {job.company}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-ink-soft">{job.company}</p>
                )}
                <p className="mt-1 text-sm text-ink-muted">{job.period}</p>
              </div>

              <div className="mt-5 sm:mt-0 sm:col-span-2">
                <p className="font-medium text-ink">{job.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
