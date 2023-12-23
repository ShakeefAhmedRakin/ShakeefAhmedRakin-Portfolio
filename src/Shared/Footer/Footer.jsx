import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-primary shadow-xl">
        <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 py-10">
          <div className="md:flex md:items-center md:justify-between text-background font-text">
            <span className="text-sm sm:text-center">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Rakin
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap gap-y-3 items-center mt-8 text-sm font-medium sm:mt-0">
              <li>
                <Link to={"/"} className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/projects"} className="hover:underline me-4 md:me-6">
                  Projects
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/resume"} className="hover:underline me-4 md:me-6">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
