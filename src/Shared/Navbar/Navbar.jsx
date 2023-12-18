import { TbHexagonLetterR } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={`hover:underline duration-150 ${
            location.pathname == "/" ? "text-primary font-medium" : ""
          }`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={`hover:underline duration-150 ${
            location.pathname == "/projects" ? "text-primary font-medium" : ""
          }`}
        >
          Projects
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="border-b-black border-b-[1px] bg-background">
        <div className="navbar container mx-auto px-2 md:px-5 lg:px-20 xl:px-28">
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
            <ul className="hidden lg:flex text-primary font-heading text-xl tracking-wider gap-4">
              {links}
            </ul>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
