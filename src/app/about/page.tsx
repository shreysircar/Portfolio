import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import EducationSection from "./components/EducationSection"
import DesignFoundationSection from "./components/DesignFoundationSection"
import LifeSection from "./components/LifeSection"

export default function AboutPage() {
  return (
    <main className="bg-[#F3F3F3] text-neutral-800 relative">
      <HeroSection />
      <InfoSection />
      <EducationSection />
      <DesignFoundationSection />
      <LifeSection />
    </main>
  )
}