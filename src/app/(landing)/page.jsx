import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <SkillsSection />
      <AboutSection />
    </div>
  );
}
