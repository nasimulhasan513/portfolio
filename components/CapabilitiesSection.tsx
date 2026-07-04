import FadeIn from "./ui/FadeIn";

const items = [
  {
    key: "core/",
    name: "Backend Systems",
    desc: "The part of an app you don't see — accounts, payments, data. I build the core systems teams rely on, from students-teachers-admins to browsing, checkout and delivery.",
  },
  {
    key: "perf/",
    name: "Performance",
    desc: "I tune systems so pages load quickly and stay smooth, even under heavy traffic — improving how data is stored, cached, and fetched.",
  },
  {
    key: "sec/",
    name: "Security",
    desc: "User data is protected with proper access control, authentication, and secure practices baked in from the start.",
  },
  {
    key: "auto/",
    name: "Automation",
    desc: "Repetitive work — scheduling, reporting, order tracking, SMS and email updates — gets handled automatically so teams can focus on what matters.",
  },
  {
    key: "arch/",
    name: "Architecture",
    desc: "System design, REST APIs, real-time WebSockets and microservices that keep products stable and online for thousands of daily users.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-3xl">
          <FadeIn as="span" className="eyebrow">
            what i do
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          >
            Capabilities
          </FadeIn>
        </div>

        <div className="mt-14 border-t border-line">
          {items.map((it, i) => (
            <FadeIn
              key={it.key}
              delay={i * 0.06}
              className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-base-soft sm:grid-cols-[130px_1fr] sm:gap-8 sm:py-10 md:grid-cols-[160px_1fr]"
            >
              <span className="font-mono text-sm text-ink-muted transition-colors group-hover:text-accent">
                {it.key}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {it.name}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
