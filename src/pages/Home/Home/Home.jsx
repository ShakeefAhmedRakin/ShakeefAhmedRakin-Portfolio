import About from "../About/About";
import Banner from "../Banner/Banner";
import GetInTouch from "../GetInTouch/GetInTouch";
import ProjectShowcase from "../ProjectsShowcase/ProjectShowcase";
import SkillsShowcase from "../SkillsShowcase/SkillsShowcase";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Achievements from "../Achievements/Achievements";
import Publications from "../Publications/Publications";

const Home = () => {
  return (
    <main>
      <Banner />
      <section
        className="py-16 lg:py-32 bg-section"
        id="about"
        aria-labelledby="about-heading"
      >
        <h2 id="about-heading" className="sr-only">
          About
        </h2>
        <About />
      </section>
      <section
        className="py-16 lg:py-32"
        id="education"
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading" className="sr-only">
          Education
        </h2>
        <Education />
      </section>
      <section
        className="py-16 lg:py-32 bg-section"
        id="skills"
        aria-labelledby="skills-heading"
      >
        <h2 id="skills-heading" className="sr-only">
          Skills
        </h2>
        <SkillsShowcase />
      </section>
      <section
        className="py-16 lg:py-32"
        id="career"
        aria-labelledby="career-heading"
      >
        <h2 id="career-heading" className="sr-only">
          Career
        </h2>
        <Experience />
      </section>
      <section
        className="py-16 lg:py-32 bg-section"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <ProjectShowcase />
      </section>
      <section
        className="py-16 lg:py-32"
        id="achievements"
        aria-labelledby="achievements-heading"
      >
        <h2 id="achievements-heading" className="sr-only">
          Achievements
        </h2>
        <Achievements />
      </section>
      <section
        className="py-16 lg:py-32 bg-section"
        id="publications"
        aria-labelledby="publications-heading"
      >
        <h2 id="publications-heading" className="sr-only">
          Publications
        </h2>
        <Publications />
      </section>
      <section
        className="py-16 lg:py-32"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading" className="sr-only">
          Contact
        </h2>
        <GetInTouch />
      </section>
    </main>
  );
};

export default Home;
