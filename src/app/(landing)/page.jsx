import Footer from "@/components/layout/footer";
import AboutSection from "@/components/sections/about";
import BookMe from "@/components/sections/bookme";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import WorkSection from "@/components/sections/work";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <BookMe />
      <WorkSection />
      <Footer />
    </div>
  );
}
