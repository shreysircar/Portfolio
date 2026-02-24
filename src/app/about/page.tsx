import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import EducationSection from "./components/EducationSection"
import DesignFoundationSection from "./components/ExperienceSection"
import LifeSection from "./components/LifeSection"
import AnimatedTagline from "./components/AnimatedTagline";

export default function AboutPage() {
  return (
    <main className="bg-[#F3F3F3] text-neutral-800 relative">
      
      <AnimatedTagline />

      <HeroSection />
      <InfoSection />
      <EducationSection />
      <DesignFoundationSection />
      <LifeSection />
    </main>
  )
}