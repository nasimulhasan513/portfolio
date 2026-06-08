import Image from "next/image";
import { Boxes, GaugeCircle, ShieldCheck, Workflow, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Boxes,
    title: "Builds the foundation",
    text: "The part of an app you don't see — accounts, payments, data — I make sure it's solid.",
  },
  {
    icon: GaugeCircle,
    title: "Keeps things fast",
    text: "I tune systems so pages load quickly and stay smooth, even under heavy traffic.",
  },
  {
    icon: ShieldCheck,
    title: "Keeps things safe",
    text: "User data is protected with proper access control and secure practices.",
  },
  {
    icon: Workflow,
    title: "Automates the busywork",
    text: "Repetitive tasks get handled automatically, so teams can focus on real work.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-16">
      <div className="container-px">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Portrait */}
          <div className="reveal-up order-1 lg:col-span-5">
            <figure className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Nasimul Hasan Deep"
                  width={800}
                  height={1200}
                  sizes="(max-width: 1024px) 24rem, 40vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted">
                <span>Fig. 02 — Off the clock</span>
                <span>Cox&apos;s Bazar</span>
              </figcaption>
            </figure>
          </div>

          {/* Text */}
          <div className="reveal-up order-2 lg:col-span-7">
            <span className="eyebrow">01 — About</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              A software engineer who turns ideas into reliable products.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                For the last few years I&apos;ve led the engineering behind learning
                platforms and an online store used by tens of thousands of people across
                Bangladesh. As CTO at Rhombus Publications and Lead Backend Engineer at
                ACS Future School, I help teams ship products that actually work.
              </p>
              <p>
                I care about doing the basics really well: clear structure, fast
                performance, and software that keeps running without surprises.
              </p>
            </div>

            <dl className="mt-8 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-muted">
                    Education
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    B.Sc. in Computer Science &amp; Engineering
                  </dd>
                  <dd className="text-sm text-ink-soft">
                    Independent University, Bangladesh
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal-up card p-6"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <h.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
