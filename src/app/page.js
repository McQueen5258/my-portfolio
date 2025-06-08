import ContactSection from "src/components/ContactSection";
import EducationSection from "src/components/EducationSection";
import ExperienceSection from "src/components/ExperienceSection";
import ExperienceTimeline from "src/components/ExperienceTimeline";
import Hero from "src/components/Hero";
import Portfolio from "src/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceTimeline />
      {/* <ExperienceSection />
      <EducationSection /> */}
      <Portfolio />
      <ContactSection />
    </main>
  );
}
