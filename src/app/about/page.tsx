import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import EducationSection from "./components/EducationSection"
import DesignFoundationSection from "./components/ExperienceSection"
import LifeSection from "./components/LifeSection"

export default function AboutPage() {
  return (
    <main className="bg-[#F3F3F3] text-neutral-800 relative">
      <div className="
  pt-6
  pl-10 lg:pl-24
  text-[11px]
  md:text-[12px]
  font-medium
  tracking-[0.18em]
  text-neutral-400
  uppercase
">
  System-first thinking.
</div>
      <HeroSection />
      <InfoSection />
      <EducationSection />
      <DesignFoundationSection />
      <LifeSection />
    </main>
  )
}