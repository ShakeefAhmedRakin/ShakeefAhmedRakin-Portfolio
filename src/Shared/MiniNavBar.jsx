import { useState, useEffect, useRef } from "react";
import { TbHexagonLetterR } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const MiniNavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const scrollSectionRef = useRef(null);

  // Handle scroll-based visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Scroll to a section when a button is clicked
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

  // Handle page load scroll if already on the page
  useEffect(() => {
    if (location.pathname === "/" && scrollSectionRef.current) {
      scrollToSection();
    }
  }, [location.pathname]);

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
            className="text-sm font-semibold text-text hover:text-primary duration-300"
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
          className="text-sm font-bold text-primary duration-300"
          aria-label="View Resume"
        >
          Resume
        </button>
      </li>
    </>
  );

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full p-1 bg-background bg-opacity-95 text-white transition-opacity duration-500 z-50 ${
        showNavbar
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 flex justify-between items-center">
        {/* DESKTOP LOGO LEFT ALIGNED */}
        <div
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
          className="text-lg invisible md:visible cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && navigate("/")}
          aria-label="Go to homepage"
        >
          <TbHexagonLetterR className="text-primary text-3xl" />
        </div>

        {/* MOBILE LOGO CENTERED */}
        <div
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
          className="text-lg visible md:invisible -mr-3 cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && navigate("/")}
          aria-label="Go to homepage"
        >
          <TbHexagonLetterR className="text-primary text-3xl" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-4" role="menubar">
          {links}
        </ul>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            className="btn btn-ghost -mr-4"
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            aria-label={dropdownOpen ? "Close menu" : "Open menu"}
          >
            {dropdownOpen ? (
              <FaTimes className="text-2xl text-black" />
            ) : (
              <RxHamburgerMenu className="text-2xl text-black" />
            )}
          </button>
          <ul
            className={`dropdown-content bg-background bg-opacity-95 p-4 shadow-lg w-screen text-center flex flex-col items-center gap-3 fixed left-0 z-50 transition-opacity duration-300 transform ${
              dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            role="menu"
          >
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MiniNavBar;
