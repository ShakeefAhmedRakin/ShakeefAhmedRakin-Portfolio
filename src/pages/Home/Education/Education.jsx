import { TbSchool } from "react-icons/tb";
import { RiSchoolLine } from "react-icons/ri";
import { LiaSchoolSolid } from "react-icons/lia";

const Education = () => {
  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      aria-labelledby="education-title"
    >
      <h1
        id="education-title"
        data-aos="fade-down"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head text-center"
      >
        Education<span className="text-primary">.</span>
      </h1>
      <div
        className="w-12 p-0.5 bg-primary my-4 mx-auto"
        data-aos="fade-down"
        role="separator"
        aria-hidden="true"
      ></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center mt-10">
        {/* UNIVERSITY - UNDERGRADUATE */}
        <article
          className="flex flex-col items-center font-text"
          data-aos="fade-up"
          aria-labelledby="undergraduate-degree"
        >
          <div
            className="flex items-center justify-center w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24"
            aria-hidden="true"
          >
            <TbSchool className="text-primary text-5xl lg:text-6xl" />
          </div>
          <p className="text-xs mt-2" aria-label="Duration of degree">
            May 2020 – May 2024
          </p>
          <h2
            id="undergraduate-degree"
            className="text-xs md:text-lg font-bold text-text leading-tight mt-1"
          >
            Bachelor of Science in Computer Science and Engineering
          </h2>
          <p className="text-xs md:text-base font-text text-text">
            BRAC University
          </p>
        </article>

        {/* A LEVELS - CAMBRIDGE */}
        <article
          className="flex flex-col items-center font-text"
          data-aos="fade-up"
          aria-labelledby="a-levels-degree"
        >
          <div
            className="flex items-center justify-center w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24"
            aria-hidden="true"
          >
            <RiSchoolLine className="text-primary text-5xl lg:text-6xl" />
          </div>
          <p className="text-xs mt-2" aria-label="Duration of A Levels">
            Jun 2018 – Nov 2019
          </p>
          <h2
            id="a-levels-degree"
            className="text-xs md:text-lg font-bold text-text leading-tight mt-1"
          >
            GCE International
            <br /> A Levels
          </h2>
          <p className="text-xs md:text-base font-text text-text">Cambridge</p>
        </article>

        {/* O LEVELS - CAMBRIDGE */}
        <article
          className="flex flex-col items-center font-text"
          data-aos="fade-up"
          aria-labelledby="o-levels-degree"
        >
          <div
            className="flex items-center justify-center w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24"
            aria-hidden="true"
          >
            <LiaSchoolSolid className="text-primary text-5xl lg:text-6xl" />
          </div>
          <p className="text-xs mt-2" aria-label="Duration of O Levels">
            Jun 2016 – Nov 2016
          </p>
          <h2
            id="o-levels-degree"
            className="text-xs md:text-lg font-bold text-text leading-tight mt-1"
          >
            GCE International
            <br /> O Levels
          </h2>
          <p className="text-xs md:text-base font-text text-text">Cambridge</p>
        </article>
      </div>
    </section>
  );
};

export default Education;
