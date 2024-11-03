import { useEffect, useRef } from "react";
import { FaCircle, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollSectionRef = useRef(null);

  const scrollToSectionID = (id) => {
    scrollSectionRef.current = id;
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection();
    }
  };

  const scrollToSection = () => {
    const sectionID = document.getElementById(scrollSectionRef.current);
    if (sectionID) {
      sectionID.scrollIntoView({ behavior: "smooth" });
      scrollSectionRef.current = null;
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && scrollSectionRef.current) {
      scrollToSection();
    }
  }, [location.pathname]);

  return (
    <>
      <div className="bg-primary relative py-6 mt-20">
        <h1 className="absolute -top-[25px] left-2 text-xl flex gap-1 text-primary">
          <FaCircle />
          <FaCircle />
          <FaCircle />
        </h1>
        <h1 className="absolute -top-[25px] right-2 text-xl flex gap-1 text-primary">
          <FaCircle />
          <FaCircle />
          <FaCircle />
        </h1>
        <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 py-10">
          <div className="flex justify-center flex-col items-center gap-8 text-background font-text">
            {/* INFO */}
            <div>
              {/* TITLE */}
              <h1 className="text-center md:text-3xl font-semibold">
                Shakeef Ahmed Rakin
              </h1>
              {/* POSITION */}
              <h2 className="text-center text-xs md:text-md opacity-80 font-semibold">
                Full Stack Developer & AI Enthusiast
              </h2>
            </div>
            {/* NAVIGATION */}
            <ul className="flex flex-wrap gap-y-3 gap-x-3 items-center text-sm font-medium">
              <li>
                <button
                  onClick={() => {
                    if (location.pathname === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      navigate("/");
                    }
                  }}
                  className="font-medium text-xs rounded-2xl hover:underline duration-300 border-transparent tracking-wide"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionID("about")}
                  className="font-medium text-xs rounded-2xl hover:underline duration-300 border-transparent tracking-wide"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionID("career")}
                  className="font-medium text-xs rounded-2xl hover:underline duration-300 border-transparent tracking-wide"
                >
                  Career
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionID("contact")}
                  className="font-medium text-xs rounded-2xl hover:underline duration-300 border-transparent tracking-wide"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/projects");
                  }}
                  className="font-medium text-xs rounded-2xl hover:underline duration-300 border-transparent tracking-wide"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/resume");
                  }}
                  className="font-medium text-xs rounded-2xl hover:underline duration-300 border-transparent tracking-wide"
                >
                  Resume
                </button>
              </li>
            </ul>

            {/* SOCIALS */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/ShakeefAhmedRakin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle md:btn-lg bg-transparent text-background border-primary hover:bg-primary hover:text-white border-[2.3px] hover:border-primary"
              >
                <TbBrandGithub className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/shakeef-ahmed-rakin-269548242/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle md:btn-lg bg-transparent text-background border-primary hover:bg-primary hover:text-white border-[2.3px] hover:border-primary"
              >
                <FaLinkedinIn className="text-3xl" />
              </a>
            </div>
            {/* COPYRIGHT */}
            <p className="text-xs text-center">
              &copy; 2024 Shakeef Ahmed Rakin. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
