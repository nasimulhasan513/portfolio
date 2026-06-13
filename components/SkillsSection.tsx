import {
  Webhook,
  ArrowLeftRight,
  Infinity as InfinityIcon,
  Network,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";

type Skill =
  | { name: string; slug: string; color: string }
  | { name: string; icon: LucideIcon };

type Category = { title: string; items: Skill[] };

const categories: Category[] = [
  {
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
      { name: "Express", slug: "express", color: "#475569" },
      { name: "Python", slug: "python", color: "#3776AB" },
      { name: "Flask", slug: "flask", color: "#475569" },
      { name: "Go", slug: "go", color: "#007D9C" },
      { name: "PHP / Laravel", slug: "laravel", color: "#F0502F" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
      { name: "MongoDB", slug: "mongodb", color: "#47A248" },
      { name: "MySQL", slug: "mysql", color: "#4479A1" },
      { name: "Prisma", slug: "prisma", color: "#2D3748" },
      { name: "Redis", slug: "redis", color: "#DC382D" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
      { name: "JavaScript", slug: "javascript", color: "#B59100" },
      { name: "Vue.js", slug: "vuedotjs", color: "#42B883" },
      { name: "Nuxt", slug: "nuxtdotjs", color: "#00A971" },
      { name: "React", slug: "react", color: "#149ECA" },
      { name: "Next.js", slug: "nextdotjs", color: "#475569" },
      { name: "Tailwind", slug: "tailwindcss", color: "#0891B2" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", slug: "amazonwebservices", color: "#232F3E" },
      { name: "Docker", slug: "docker", color: "#2496ED" },
      { name: "Nginx", slug: "nginx", color: "#009639" },
      { name: "Linux", slug: "linux", color: "#475569" },
      { name: "CI/CD", icon: InfinityIcon },
    ],
  },
  {
    title: "APIs & Architecture",
    items: [
      { name: "REST APIs", icon: Webhook },
      { name: "WebSockets", icon: ArrowLeftRight },
      { name: "System Design", icon: Network },
      { name: "Microservices", icon: Boxes },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", slug: "git", color: "#F05032" },
      { name: "Postman", slug: "postman", color: "#FF6C37" },
      { name: "Google Apps Script", slug: "googleappsscript", color: "#4285F4" },
    ],
  },
];

function Chip({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-base-elev px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-[#D7E2EA]/40 hover:text-ink">
      {"slug" in skill ? (
        <span
          aria-hidden
          className="h-[18px] w-[18px] shrink-0 bg-no-repeat"
          style={{
            backgroundColor: "#D7E2EA",
            WebkitMaskImage: `url(/tech/${skill.slug}.svg)`,
            maskImage: `url(/tech/${skill.slug}.svg)`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      ) : (
        <skill.icon className="h-[18px] w-[18px] shrink-0 text-ink-muted" strokeWidth={2} />
      )}
      {skill.name}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-base py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            Toolkit
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-[0.95] tracking-tight"
          >
            What i build <span className="brand-text">with</span>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn
              key={cat.title}
              delay={(i % 2) * 0.08}
              className="rounded-3xl border border-line bg-base-soft p-6"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-muted">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <Chip key={s.name} skill={s} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
