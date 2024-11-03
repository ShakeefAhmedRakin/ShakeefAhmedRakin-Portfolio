import Skills from "./Skills/Skills";

const SkillsShowcase = () => {
  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      aria-labelledby="skills-showcase-title"
    >
      {/* TITLE */}
      <header className="mb-6">
        <h1
          id="skills-showcase-title"
          data-aos="fade-down"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head text-center"
          role="heading"
          aria-level="1"
        >
          Skills<span className="text-primary">.</span>
        </h1>
        <div
          className="w-12 p-0.5 bg-primary my-4 mx-auto"
          data-aos="fade-down"
        />
        <p
          className="font-text max-w-2xl text-center mx-auto mb-4"
          data-aos="fade-up"
        >
          A showcase of my technical skills and expertise across a range of
          tools, frameworks, and programming languages.
        </p>
      </header>
      <Skills />
    </section>
  );
};

export default SkillsShowcase;
