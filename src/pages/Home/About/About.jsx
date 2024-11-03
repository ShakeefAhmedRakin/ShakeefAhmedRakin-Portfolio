const About = () => {
  const scrollToSection = (id) => {
    const sectionID = document.getElementById(id);
    if (sectionID) {
      sectionID.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      aria-labelledby="about-title"
    >
      <header className="mb-10">
        <h1
          id="about-title"
          data-aos="fade-down"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head mx-auto text-center"
        >
          About<span className="text-primary">.</span>
        </h1>
        <div
          className="w-12 p-0.5 bg-primary my-4 mx-auto"
          data-aos="fade-down"
          role="separator"
          aria-hidden="true"
        ></div>
      </header>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        {/* IMAGE */}
        <figure className="flex items-center" data-aos="fade-up">
          <img
            src="/AboutMePic.jpg"
            alt="Portrait of Shakeef Ahmed Rakin"
            draggable={false}
            className="max-h-72 lg:max-h-[380px] w-full aspect-square rounded-full object-cover shadow-2xl border border-primary"
          />
          <figcaption className="sr-only">Shakeef Ahmed Rakin</figcaption>
        </figure>
        {/* ABOUT ME */}
        <div className="flex-1">
          {/* CONTENT ABOUT ME */}
          <article>
            <p
              className="mb-3 font-text text-xs md:text-sm lg:text-base"
              data-aos="fade-down"
            >
              Hi! I'm{" "}
              <span className="italic text-primary font-medium">
                Shakeef Ahmed Rakin
              </span>
              , a Software Engineer who likes to write clean and well-documented
              code that is connected to equally intuitive user interfaces. I
              completed my
              <span className="font-medium">
                {" "}
                Bachelor of Science in Computer Science and Engineering{" "}
              </span>
              from BRAC University, and I look forward to pursuing my Master's
              degree in a similar field.
            </p>
            <p
              className="mb-3 font-text text-xs md:text-sm lg:text-base "
              data-aos="fade-down"
            >
              My expertise lies in{" "}
              <span className="font-medium">Full Stack Development</span>, with
              a focus on building scalable and user-centric applications using
              the latest technologies. I also have a keen interest in machine
              learning, with projects involving{" "}
              <span className="font-medium">Natural Language Processing</span>{" "}
              (NLP) and <span className="font-medium">Computer Vision</span>.
              Additionally, I have some experience working with{" "}
              <span className="font-medium">.NET Software Development</span>.
            </p>
            <p
              className="mb-3 font-text text-xs md:text-sm lg:text-base "
              data-aos="fade-down"
            >
              When I'm not immersed in development projects, I’m either
              listening to music, discovering new genres to inspire my work, or
              binging anime for some creative downtime. Gaming has also been an
              integral part of my life, feeding my love for interactive,
              competitive worlds and helping me approach problem-solving in
              fresh, innovative ways.
            </p>
            <div
              className="w-12 p-0.5 bg-primary my-4"
              data-aos="fade-down"
              role="separator"
              aria-hidden="true"
            ></div>
            <p
              className="mb-3 font-text text-xs md:text-sm lg:text-base"
              data-aos="fade-down"
            >
              Think we could create something amazing together?
              <span
                className="text-primary font-semibold hover:underline cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection("contact")}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    scrollToSection("contact");
                  }
                }}
              >
                {" "}
                Let's connect!
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
