import { Badge } from "@/components/ui/badge";
import { Code, Globe, Wrench, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "Python", "JavaScript"],
      color: "from-primary to-primary/80"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
      color: "from-accent to-accent/80"
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["Streamlit", "Google Generative AI", "pdfplumber", "python-docx"],
      color: "from-primary/80 to-accent/80"
    },
    {
      title: "Core Concepts",
      icon: Brain,
      skills: ["Data Structures", "Algorithms", "RESTful APIs", "Bit-level operations"],
      color: "from-accent/80 to-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="gradient-card rounded-2xl p-8 shadow-card transition-spring hover:shadow-hover hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <Icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium gradient-tech border-0 hover:scale-105 transition-spring"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;