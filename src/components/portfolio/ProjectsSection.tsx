import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Zap, Database, Brain } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Compresso",
      year: "2025",
      icon: Zap,
      description: "File compression tool using Huffman Coding for lossless text compression.",
      techStack: ["C++"],
      features: [
        "Implemented frequency analysis and binary tree construction",
        "Developed bit-level encoding and decoding algorithms",
        "Achieved efficient lossless text compression"
      ],
      gradient: "from-primary to-primary/80"
    },
    {
      title: "TalentScout Interview Assistant",
      year: "2024",
      icon: Brain,
      description: "AI-driven tool for analyzing resumes and generating technical interview questions.",
      techStack: ["Python", "Streamlit", "Google Generative AI"],
      features: [
        "Automated resume analysis and processing",
        "Dynamic technical question generation",
        "Streamlined recruitment workflows"
      ],
      gradient: "from-accent to-accent/80"
    },
    {
      title: "CRUDIFY",
      year: "2025",
      icon: Database,
      description: "Full-stack CRUD web application with scalable data storage and dynamic UI.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Implemented comprehensive REST APIs",
        "Built clean, maintainable architecture",
        "Developed responsive user interface"
      ],
      gradient: "from-primary/80 to-accent/80"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="gradient-card rounded-2xl p-8 shadow-card transition-spring hover:shadow-hover hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                    <Icon className="h-6 w-6 text-background" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-3 py-1 border-primary/20 text-primary hover:bg-primary/10 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 transition-spring hover:scale-105"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 transition-spring hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;