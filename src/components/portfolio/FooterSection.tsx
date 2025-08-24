import { Github, Mail, Phone, Heart } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    email: "viveksinghbhadoriya4812@gmail.com",
    phone: "+91-8077615502",
    github: "https://github.com/VIVEKBHADORIYA"
  };

  return (
    <footer className="py-16 px-6 gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to bring ideas to life through code
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
              <Mail className="h-5 w-5" />
            </div>
            <span className="hidden md:inline">Email</span>
          </a>
          
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
              <Phone className="h-5 w-5" />
            </div>
            <span className="hidden md:inline">Call</span>
          </a>
          
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
              <Github className="h-5 w-5" />
            </div>
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made  by Vivek Singh Bhadoriya
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} Don't copy it .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;