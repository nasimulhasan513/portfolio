import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <AboutSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
