import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Uttrakhand Technical University",
      location: "Bhimtal",
      degree: "Bachelor of Technology in Computer Science Engineering",
      period: "2022–2026",
      grade: "75%",
      status: "Pursuing",
      color: "from-primary to-primary/80"
    },
    {
      institution: "Beersheba Senior Secondary School",
      degree: "Class XII",
      period: "2019–2021",
      grade: "92%",
      status: "Completed",
      color: "from-accent to-accent/80"
    },
    {
      institution: "Ranibow Academy",
      degree: "Class X",
      period: "2018–2019",
      grade: "89%",
      status: "Completed",
      color: "from-primary/80 to-accent/80"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className="gradient-card rounded-2xl p-8 shadow-card transition-spring hover:shadow-hover hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} mr-4`}>
                    <GraduationCap className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.institution}
                    </h3>
                    {edu.location && (
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-primary">
                    <Award className="h-4 w-4 mr-1" />
                    {edu.grade}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <p className="text-lg font-medium text-foreground mb-2 md:mb-0">
                  {edu.degree}
                </p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'Pursuing' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;