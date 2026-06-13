import FadeIn from "./ui/FadeIn";

const items = [
  {
    no: "01",
    name: "Backend Systems",
    desc: "The part of an app you don't see — accounts, payments, data. I build the core systems teams rely on, from students-teachers-admins to browsing, checkout and delivery.",
  },
  {
    no: "02",
    name: "Performance",
    desc: "I tune systems so pages load quickly and stay smooth, even under heavy traffic — improving how data is stored, cached, and fetched.",
  },
  {
    no: "03",
    name: "Security",
    desc: "User data is protected with proper access control, authentication, and secure practices baked in from the start.",
  },
  {
    no: "04",
    name: "Automation",
    desc: "Repetitive work — scheduling, reporting, order tracking, SMS and email updates — gets handled automatically so teams can focus on what matters.",
  },
  {
    no: "05",
    name: "Architecture",
    desc: "System design, REST APIs, real-time WebSockets and microservices that keep products stable and online for thousands of daily users.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
      >
        Capabilities
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {items.map((it, i) => (
          <FadeIn
            key={it.no}
            delay={i * 0.1}
            className="flex items-start gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-8 sm:py-10 md:py-12"
          >
            <span className="shrink-0 text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {it.no}
            </span>
            <div className="pt-1 sm:pt-2 md:pt-3">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase tracking-tight">
                {it.name}
              </h3>
              <p className="mt-2 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                {it.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
