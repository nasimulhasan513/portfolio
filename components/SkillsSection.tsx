import {
  Webhook,
  ArrowLeftRight,
  Infinity as InfinityIcon,
  Network,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";

type Skill = { name: string; slug: string } | { name: string; icon: LucideIcon };

type Category = { title: string; items: Skill[] };

const categories: Category[] = [
  {
    title: "backend/",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "Python", slug: "python" },
      { name: "Flask", slug: "flask" },
      { name: "Go", slug: "go" },
      { name: "PHP / Laravel", slug: "laravel" },
    ],
  },
  {
    title: "databases/",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Prisma", slug: "prisma" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    title: "frontend/",
    items: [
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Vue.js", slug: "vuedotjs" },
      { name: "Nuxt", slug: "nuxtdotjs" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind", slug: "tailwindcss" },
    ],
  },
  {
    title: "cloud-devops/",
    items: [
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Docker", slug: "docker" },
      { name: "Nginx", slug: "nginx" },
      { name: "Linux", slug: "linux" },
      { name: "CI/CD", icon: InfinityIcon },
    ],
  },
  {
    title: "apis-architecture/",
    items: [
      { name: "REST APIs", icon: Webhook },
      { name: "WebSockets", icon: ArrowLeftRight },
      { name: "System Design", icon: Network },
      { name: "Microservices", icon: Boxes },
    ],
  },
  {
    title: "tools/",
    items: [
      { name: "Git", slug: "git" },
      { name: "Postman", slug: "postman" },
      { name: "Google Apps Script", slug: "googleappsscript" },
    ],
  },
];

function Chip({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-base-elev px-3 py-2 font-mono text-[0.8rem] text-ink-soft transition-colors hover:border-accent/60 hover:text-accent">
      {"slug" in skill ? (
        <span
          aria-hidden
          className="h-[16px] w-[16px] shrink-0 bg-no-repeat"
          style={{
            backgroundColor: "currentColor",
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
        <skill.icon className="h-[16px] w-[16px] shrink-0" strokeWidth={2} />
      )}
      {skill.name}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 bg-base-soft py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            toolkit
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          >
            What I build with
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn
              key={cat.title}
              delay={(i % 2) * 0.07}
              className="rounded-2xl border border-line bg-base p-6"
            >
              <h3 className="mb-4 font-mono text-sm text-ink-muted">
                <span className="text-accent">~/</span>
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
