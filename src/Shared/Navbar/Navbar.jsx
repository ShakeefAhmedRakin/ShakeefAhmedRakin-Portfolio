import { TbHexagonLetterR } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  let location = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={`hover:underline duration-300 underline-offset-4 ${
            location.pathname == "/" ? "underline font-medium" : ""
          }`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/projects"}
          className={`hover:underline duration-300 underline-offset-4  ${
            location.pathname == "/projects" ? "underline font-medium" : ""
          }`}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={`hover:underline duration-300 underline-offset-4  ${
            location.pathname == "/contact" ? "underline font-medium" : ""
          }`}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1ZtBDYbnqmdLg7ttgyI9OA7JDtnbJ5dRT/view?usp=drive_link"
          target="_blank"
          className={`hover:underline duration-300 underline-offset-4`}
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-primary text-white">
        <div className="navbar container mx-auto py-3 lg:py-8 px-3 md:px-5 lg:px-20 xl:px-28">
          <div className="navbar-start">
            <div>
              <NavLink to={"/"}>
                <h1 className="whitespace-nowrap font-heading text-2xl md:text-3xl tracking-[9px] hover:tracking-[12px] duration-300 flex items-center gap-2">
                  <TbHexagonLetterR></TbHexagonLetterR>
                  RAKIN
                </h1>
              </NavLink>
            </div>
          </div>
          <div className="navbar-end">
            <ul className="hidden lg:flex font-heading text-xl tracking-wider gap-12">
              {links}
            </ul>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <RxHamburgerMenu className="text-2xl -mr-4" />
              </div>
              <ul
                tabIndex={0}
                className="font-heading text-primary space-y-2 dropdown-content bg-background text-lg mt-3 border-primary border-[1px] z-50 p-3 shadow-xl w-56 block lg:hidden"
              >
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
