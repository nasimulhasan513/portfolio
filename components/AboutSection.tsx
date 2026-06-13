import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import AnimatedText from "./ui/AnimatedText";
import ContactButton from "./ui/ContactButton";

const BIO =
  "For the last few years i've led the engineering behind learning platforms and an online store used by tens of thousands of people across Bangladesh. As CTO at Rhombus Publications and Lead Backend Engineer at ACS Future School, i help teams ship products that actually work. Let's build something reliable together!";

const decor = [
  { src: "/gallery/web/nuarelliye_srilanka.jpg", cls: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[150px] md:w-[190px]", x: -80, delay: 0.1 },
  { src: "/gallery/web/happiness_cafe_gulshan.jpg", cls: "top-[6%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[150px] md:w-[190px]", x: 80, delay: 0.15 },
  { src: "/gallery/web/from_cox_to_dhaka.jpg", cls: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[95px] sm:w-[130px] md:w-[170px]", x: -80, delay: 0.25 },
  { src: "/gallery/web/sahabuddin_park2.jpg", cls: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[100px] sm:w-[140px] md:w-[180px]", x: 80, delay: 0.3 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {/* floating photo decor */}
      {decor.map((d) => (
        <FadeIn
          key={d.src}
          x={d.x}
          y={0}
          delay={d.delay}
          duration={0.9}
          className={`pointer-events-none absolute hidden overflow-hidden rounded-2xl border border-line opacity-80 shadow-2xl sm:block ${d.cls}`}
        >
          <Image src={d.src} alt="" width={190} height={250} className="h-full w-full object-cover" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          About me
        </FadeIn>

        <AnimatedText
          text={BIO}
          className="max-w-[620px] text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-ink"
        />
      </div>

      <FadeIn delay={0.1} className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </FadeIn>
    </section>
  );
}
