import HeroSection from "@/components/portfolio/HeroSection";
import ObjectiveSection from "@/components/portfolio/ObjectiveSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import FooterSection from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ObjectiveSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
