import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiLaptop } from "react-icons/ci";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineCode } from "react-icons/ai";
import { LuFileCode2 } from "react-icons/lu";

const Banner = () => {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const sectionID = document.getElementById(id);
    if (sectionID) {
      sectionID.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 py-32 md:py-48 relative"
      aria-labelledby="banner-heading"
    >
      {/* INTRODUCTION */}
      <div>
        {/* NAME */}
        <h1
          id="banner-heading" // Added ID for accessibility
          className="text-center text-4xl md:text-5xl font-bold text-text mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hello<span className="text-primary">.</span> I'm Shakeef Ahmed
          <span className="text-primary">.</span>
        </h1>
        {/* TITLE */}
        <h2
          className="text-center text-2xl md:text-3xl text-text font-semibold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Full Stack Developer & AI Enthusiast
        </h2>
      </div>
      {/* CTA */}
      <div
        className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <button
          onClick={() => scrollToSection("contact")}
          className="btn bg-primary text-white border-none w-52 hover:bg-primary"
          aria-label="Get in touch" // Added aria-label for better accessibility
        >
          Get In Touch
        </button>
        <button
          onClick={() => navigate("/resume")}
          className="btn bg-transparent text-primary border-primary hover:border-primary w-52 hover:bg-primary hover:text-white border-[2.3px]"
          aria-label="View resume" // Added aria-label for better accessibility
        >
          Resume
        </button>
      </div>
      {/* SOCIALS */}
      <div
        className="flex justify-center gap-4 mt-8"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <a
          href="https://github.com/ShakeefAhmedRakin"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle bg-transparent text-primary border-primary hover:bg-primary hover:text-white border-[2.3px] hover:border-primary"
          aria-label="GitHub profile" // Added aria-label for better accessibility
        >
          <TbBrandGithub className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/shakeef-ahmed-rakin-269548242/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle bg-transparent text-primary border-primary hover:bg-primary hover:text-white border-[2.3px] hover:border-primary"
          aria-label="LinkedIn profile" // Added aria-label for better accessibility
        >
          <FaLinkedinIn className="text-2xl" />
        </a>
      </div>
      {/* FLOATING ICONS */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <CiLaptop
          className="text-[50px] md:text-[100px] lg:text-[150px] text-primary opacity-10 absolute top-10 left-24"
          data-aos="flip-down"
          data-aos-delay="800"
        />
        <IoCodeSlash
          className="text-[50px] md:text-[100px] lg:text-[150px] text-primary opacity-10 absolute bottom-10 right-24"
          data-aos="flip-down"
          data-aos-delay="800"
        />
        <AiOutlineCode
          className="text-[50px] md:text-[100px] lg:text-[150px] text-primary opacity-10 absolute top-10 right-24"
          data-aos="flip-down"
          data-aos-delay="800"
        />
        <LuFileCode2
          className="text-[50px] md:text-[100px] lg:text-[150px] text-primary opacity-10 absolute bottom-10 left-24"
          data-aos="flip-down"
          data-aos-delay="800"
        />
      </div>
    </section>
  );
};

export default Banner;
