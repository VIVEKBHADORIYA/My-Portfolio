const ObjectiveSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Career Objective
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-card transition-smooth hover:shadow-hover">
          <p className="text-lg md:text-xl leading-relaxed text-center text-foreground">
            Aspiring software developer looking for an opportunity to apply and enhance my programming skills, 
            contribute to impactful software solutions, and gain hands-on experience in a dynamic and 
            collaborative environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;