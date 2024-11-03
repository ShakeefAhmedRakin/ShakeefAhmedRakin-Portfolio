import Marquee from "react-fast-marquee";

const Achievement = ({ logo, title, subtitle, date }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 font-text aspect-square rounded-full bg-section w-full"
      role="group" // Added role for better accessibility
      aria-labelledby={`${title}-label`} // Associate title with aria label
    >
      <img
        src={logo}
        className="aspect-square w-24"
        draggable={false}
        alt={`${title} Logo`}
        loading="lazy" // Optimize loading performance
      />
      <h2
        id={`${title}-label`} // Added ID for accessibility
        className="text-base md:text-lg text-center font-semibold text-text mt-1 mb-3"
      >
        {title}
      </h2>
      <p className="text-center text-xs italic font-bold text-primary">
        {subtitle}
      </p>
      <p className="text-xs mt-1">{date}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      aria-labelledby="achievements-heading"
    >
      <header className="mb-10">
        <h1
          id="achievements-heading" // Added ID for accessibility
          data-aos="fade-down"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head text-center"
        >
          Achievements<span className="text-primary">.</span>
        </h1>
        <div
          className="w-12 p-0.5 bg-primary my-4 mx-auto"
          data-aos="fade-down"
        ></div>
      </header>
      <div data-aos="fade-up">
        <Marquee gradient={true} gradientWidth={20}>
          <div className="flex gap-8 mr-8">
            {/* ACHIEVEMENT */}
            <Achievement
              logo="/awardslogos/nali2024.png"
              title="NALI 2024: New Academia Learning Innovation"
              subtitle="Bronze Award"
              date="Oct 2024"
            />

            {/* ACHIEVEMENT */}
            <Achievement
              logo="/awardslogos/bitnbuild.png"
              title="GDSC CRCE BitNBuild’24 Hackathon"
              subtitle="Top 10 Finalists"
              date="Feb 2024"
            />

            {/* ACHIEVEMENT */}
            <Achievement
              logo="/awardslogos/kitahack2024.png"
              title="GDSC Kitahack 2024"
              subtitle="Participatory"
              date="Jan 2024"
            />

            {/* ACHIEVEMENT */}
            <Achievement
              logo="/awardslogos/devhack2023.png"
              title="Devhack 2023"
              subtitle="Top 10 Finalists"
              date="Dec 2023"
            />

            {/* ACHIEVEMENT */}
            <Achievement
              logo="/awardslogos/myrapid.png"
              title="MyRapid Bus x UTM Data Hackathon 2023"
              subtitle="2nd Place"
              date="Sep 2023"
            />
            {/* ACHIEVEMENT */}
            <Achievement
              logo="/awardslogos/innojam.png"
              title="InnoJam 2023: Smart Sustainable City"
              subtitle="5th Place"
              date="Sep 2023"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Achievements;
