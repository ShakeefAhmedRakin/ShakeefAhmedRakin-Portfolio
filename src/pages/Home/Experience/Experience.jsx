const ExperienceCard = ({
  startDate,
  endDate,
  duration,
  role,
  company,
  color,
  tasks,
}) => {
  return (
    <article className="relative font-text" data-aos="fade-up">
      <div
        className={`aspect-square rounded-full absolute -left-3.5 h-7 border-[6px] border-white`}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      ></div>
      <div className="ml-4 shadow border p-3">
        <div className="flex justify-between">
          <h3 className="text-[10px] md:text-xs font-bold" style={{ color }}>
            {startDate} - {endDate}
          </h3>
          <h3 className="text-[10px] md:text-xs font-bold text-gray-400">
            {duration}
          </h3>
        </div>
        <h1
          className="font-bold text-sm md:text-lg"
          role="heading"
          aria-level="2"
        >
          {role}
        </h1>
        <hr
          className={`border-[1px] w-1/4 my-1`}
          style={{ borderColor: color }}
          role="separator"
          aria-hidden="true"
        />
        <h2 className="text-xs md:text-sm italic" role="heading" aria-level="3">
          {company}
        </h2>
        <ul className="list-disc list-inside mt-2 text-xs md:text-sm ml-2">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      aria-labelledby="experience-title"
    >
      <div>
        {/* EXPERIENCE */}
        {/* TITLE */}
        <header className="mb-10">
          <h1
            id="experience-title"
            data-aos="fade-down"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head text-center"
            role="heading"
            aria-level="1"
          >
            Career<span className="text-primary">.</span>
          </h1>
          <div
            className="w-12 p-0.5 bg-primary my-4 mx-auto"
            data-aos="fade-down"
            role="separator"
            aria-hidden="true"
          ></div>
        </header>

        {/* Timeline Container */}
        <div className="space-y-4 relative">
          <div className="border-l border-gray-300 h-full absolute left-0"></div>

          <ExperienceCard
            startDate="October 2024"
            endDate="Present"
            duration="1 month"
            role="Full Stack Developer"
            company="Twlick"
            color="#6460BE"
            tasks={[
              "Develop and maintain features using Next.js, Supabase, PostgreSQL, and ShadCN UI on multiple concurrent projects.",
            ]}
          />
          <ExperienceCard
            startDate="August 2024"
            endDate="Present"
            duration="3 months"
            role=".NET Software Developer"
            company="Prudence Dublin College"
            color="#14627A"
            tasks={[
              "Develop and maintain features for the HOLOS-IE application using C# and MVVM architecture.",
              "Assist in implementing UI components with Avalonia and Telerik for enhanced design.",
              "Debug existing issues, improving code quality and functionality.",
              "Collaborate with the development team on feature feasibility.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
