import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  logo: string;
  url: string;
  role?: string;
  blurb: string;
  platform?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "ACS Future School",
    logo: "/projects/acsfutureschool-logo.png",
    url: "https://acsfutureschool.com/",
    role: "Lead Backend Engineer",
    blurb:
      "Bangladesh's leading online school — live classes, quizzes, and exam prep for classes 6–10 and admission tests.",
    featured: true,
  },
  {
    name: "Rhombus Publications",
    logo: "/projects/rhombuspublications-logo.svg",
    url: "https://rhombuspublications.com/",
    role: "Chief Technology Officer",
    blurb:
      "An online store for HSC academic and admission books, with ordering, payments, and delivery tracking.",
    featured: true,
  },
  {
    name: "Rhombus Publications App",
    logo: "/projects/rhombusapp-logo.png",
    url: "https://play.google.com/store/apps/details?id=com.education.rhombus",
    role: "Chief Technology Officer",
    platform: "Android · Google Play",
    blurb:
      "The Rhombus mobile app — HSC and admission study materials in students' pockets.",
    featured: true,
  },
  {
    name: "ACS Porikkha",
    logo: "/projects/acsporikkha-logo.png",
    url: "https://acsporikkha.com/",
    blurb:
      "An MCQ exam-prep platform for SSC, HSC, admission, and job-test preparation.",
  },
  {
    name: "ACS Engineering School",
    logo: "/projects/acsengineeringschool-logo.png",
    url: "https://acsengineeringschool.com/",
    blurb: "An online school focused on training tomorrow's engineers.",
  },
  {
    name: "Rhombus Parallel",
    logo: "/projects/rhombusparallel-logo.png",
    url: "https://rhombusparallel.com/",
    blurb: "A focused online learning hub for HSC Higher Math.",
  },
  {
    name: "SlackaHead",
    logo: "/projects/slackahead-logo.png",
    url: "https://slackahead.com/",
    blurb:
      "An ed-tech platform for GRE, GMAT, SAT, TOEFL, IELTS, and PTE preparation.",
  },
  {
    name: "ACS Mart",
    logo: "/projects/acsmart-logo.png",
    url: "https://acsmart.bd/",
    blurb:
      "A marketplace where young student entrepreneurs run real shops and serve buyers.",
  },
  {
    name: "Kidzora",
    logo: "/projects/kidzora-logo.png",
    url: "https://kidzora.com/",
    blurb: "A playful learning and activity platform built for children.",
  },
  {
    name: "Vinnoora",
    logo: "/projects/vinnoora-logo.png",
    url: "https://vinnoora.com/",
    blurb: "A premium South Asian fashion and lifestyle brand store.",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
    >
      {/* Logo band */}
      <div className="flex h-28 items-center justify-center border-b border-slate-100 bg-slate-50 px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.logo}
          alt={`${p.name} logo`}
          loading="lazy"
          className="max-h-12 w-auto max-w-[70%] object-contain"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-snug">{p.name}</h3>
          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-primary-600" />
        </div>

        {(p.role || p.platform) && (
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            {p.role && (
              <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                {p.role}
              </span>
            )}
            {p.platform && (
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-ink-muted">
                {p.platform}
              </span>
            )}
          </div>
        )}

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.blurb}</p>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="bg-white py-20 sm:py-28 scroll-mt-16 border-y border-slate-200"
    >
      <div className="container-px">
        <div className="reveal-up max-w-3xl">
          <span className="eyebrow">04 — Projects</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Platforms I&apos;ve been associated with</h2>
          <p className="mt-4 text-lg text-ink-soft">
            From learning platforms to online stores — real products that people use
            every day. Tap any card to visit it.
          </p>
        </div>

        {/* Featured (current roles) */}
        <div className="reveal-up mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.url} p={p} />
          ))}
        </div>

        {/* Tech support / consulting */}
        <div className="reveal-up mt-16 mb-6 max-w-3xl">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Organizations I&apos;ve supported
          </h3>
          <p className="mt-2 text-ink-soft">
            Teams I&apos;ve helped behind the scenes — building their websites, backend,
            and architecture so their products run reliably.
          </p>
        </div>
        <div className="reveal-up grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <ProjectCard key={p.url} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
