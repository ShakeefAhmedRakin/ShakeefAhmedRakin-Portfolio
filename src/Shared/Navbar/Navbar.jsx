import { TbHexagonLetterR } from "react-icons/tb";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircle, FaTimes } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { GrDocumentText } from "react-icons/gr";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollSectionRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSectionID = (id) => {
    scrollSectionRef.current = id;
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection();
    }
    setDropdownOpen(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = (
    <>
      {[
        "about",
        "education",
        "skills",
        "career",
        "projects",
        "achievements",
        "publications",
        "contact",
      ].map((section) => (
        <li key={section}>
          <button
            onClick={() => scrollToSectionID(section)}
            className="font-semibold hover:text-primary duration-300"
            aria-label={`Scroll to ${
              section.charAt(0).toUpperCase() + section.slice(1)
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            navigate("/resume");
            setDropdownOpen(false);
          }}
          className="font-bold text-primary duration-300"
          aria-label="Navigate to Resume"
        >
          Resume
        </button>
      </li>
    </>
  );

  return (
    <nav
      className="bg-background text-black my-8 py-2 relative"
      aria-label="Main Navigation"
    >
      <h1
        className="absolute -top-[25px] left-2 text-xl flex gap-1 text-background"
        aria-hidden="true"
      >
        <FaCircle />
        <FaCircle />
        <FaCircle />
      </h1>
      <h1
        className="absolute -bottom-[25px] right-2 text-xl flex gap-1 text-background"
        aria-hidden="true"
      >
        <FaCircle />
        <FaCircle />
        <FaCircle />
      </h1>
      <div className="navbar container mx-auto py-3 lg:py-8 px-3 md:px-5 lg:px-20 xl:px-28">
        <div className="navbar-start">
          <NavLink to={"/"} className={`hidden lg:flex`}>
            <h1 className="text-[54px] hover:scale-[1.2] duration-300 text-primary">
              <TbHexagonLetterR />
            </h1>
          </NavLink>
        </div>
        <div className="navbar-center">
          <NavLink to={"/"} className={`lg:hidden`}>
            <h1 className="text-[54px] hover:scale-[1.2] duration-300 text-primary">
              <TbHexagonLetterR />
            </h1>
          </NavLink>
        </div>
        <div className="navbar-end">
          <ul className="hidden lg:flex font-text gap-4 text-sm xl:gap-6 xl:text-base">
            {links}
          </ul>
          <div className="lg:hidden relative" ref={dropdownRef}>
            <button
              className="btn btn-ghost"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-label={dropdownOpen ? "Close menu" : "Open menu"}
            >
              {dropdownOpen ? (
                <FaTimes className="text-2xl text-black" />
              ) : (
                <RxHamburgerMenu className="text-2xl text-black" />
              )}
            </button>
            <ul
              className={`dropdown-content bg-background bg-opacity-95 p-4 shadow-lg w-screen -right-3 text-center flex flex-col items-center gap-3 absolute z-50 transition-opacity duration-300 transform ${
                dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              role="menu"
              aria-hidden={!dropdownOpen}
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
