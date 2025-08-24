import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, Download } from "lucide-react";

const HeroSection = () => {
  const contactInfo = {
    email: "viveksinghbhadoriya4812@gmail.com",
    phone: "+91-8077615502",
    github: "https://github.com/VIVEKBHADORIYA"
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vivek Singh Bhadoriya
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated software developer with hands-on experience in developing full-stack applications and speedy system utilities.
Proficient in creating clean, maintainable solutions that address performance and user experience needs.
Seeking to deploy problem-solving skills in practical projects that generate significant impact.
Looking forward to growing in a dynamic, collaborative environment while continuously learning.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="transition-spring hover:shadow-hover"
              asChild
            >
              <a href={`mailto:${contactInfo.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="transition-spring hover:shadow-hover"
              asChild
            >
              <a href={`tel:${contactInfo.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call
              </a>
            </Button>
            
            <Button 
              variant="default" 
              size="lg" 
              className="transition-spring hover:shadow-hover"
              asChild
            >
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <a href="\public\resume.pdf">
            <Button 
              variant="secondary" 
              size="lg" 
              className="transition-spring hover:shadow-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;