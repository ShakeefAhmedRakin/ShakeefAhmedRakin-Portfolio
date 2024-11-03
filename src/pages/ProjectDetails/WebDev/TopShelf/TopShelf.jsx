import { TbBrandGithub } from "react-icons/tb";
import { CgBrowser } from "react-icons/cg";
import SkillBadge from "../../../../Components/SkillBadge";

const TopShelf = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
        {/* PROJECT OVERVIEW AND MOCKUP */}
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-5 mb-16">
          <div className="flex-1" data-aos="fade-up">
            <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-3">
              Project Overview
            </h1>
            <p className="font-text text-sm lg:text-base mb-5">
              {
                "TopShelf presents a unique and user-centric Library Management System, allowing users to browse, borrow, and return books across various categories. The platform prioritizes ease of use and comprehensive book management features."
              }
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://topshelf-79995.web.app/"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <CgBrowser className="text-lg md:text-2xl"></CgBrowser>Go To
                Website
              </a>
              <a
                href="https://github.com/ShakeefAhmedRakin/TopShelf-client"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <TbBrandGithub className="text-lg md:text-2xl"></TbBrandGithub>
                Client
              </a>
              <a
                href="https://github.com/ShakeefAhmedRakin/TopShelf-server"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <TbBrandGithub className="text-lg md:text-2xl"></TbBrandGithub>
                Server
              </a>
            </div>
          </div>
          <div className="flex-1" data-aos="fade-up">
            <div className="mockup-browser border border-base-300 max-h-96 overflow-y-scroll rounded-r-none">
              <div className="mockup-browser-toolbar">
                <div className="input border border-base-300">
                  <a
                    href="https://topshelf-79995.web.app/"
                    target="blank"
                    className="hover:link"
                  >
                    https://topshelf-79995.web.app
                  </a>
                </div>
              </div>
              <img src="/projects/topshelf/overview.png" alt="" />
            </div>
          </div>
        </div>
        {/* ALL FEATURES */}
        <div className="mb-10">
          <h1
            className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-5"
            data-aos="fade-up"
          >
            Key Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* FEATURE */}
            <div className="font-text" data-aos="fade-right">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#F05454]">
                Book Management
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Category-Based Book Display:</strong> Clicking a
                  category redirects users to pages displaying books from that
                  category, showcasing book details and the option to read or
                  borrow.
                </li>
                <li>
                  <strong>Book Details:</strong> Detailed information about each
                  book, including options to borrow, read, or view more details.
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text" data-aos="fade-right">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#F05454]">
                Borrowing and Return System
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Borrow and Return Actions:</strong>{" "}
                  {
                    "Borrow button initiates a modal for return date selection; borrowing decreases book quantity and adds it to 'Borrowed Books'. Returning books reverses the process."
                  }
                </li>
                <li>
                  <strong>Borrowed Books Page:</strong>{" "}
                  {
                    "Displays books borrowed by the user, including borrowed and return dates, with a return button for each book."
                  }
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text" data-aos="fade-right">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#F05454]">
                Authentication and Security
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Firebase Authentication:</strong> email and
                  password-based authentication with error handling for
                  registration and login forms.
                </li>
                <li>
                  <strong>Login Option:</strong> Additional login using Google
                  implemented using Firebase.
                </li>
              </ul>
            </div>

            {/* FEATURE */}
            <div className="font-text" data-aos="fade-right">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#F05454]">
                Additional Features
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Responsive Design:</strong> Ensuring a responsive
                  layout for desktop and mobile devices, offering a seamless
                  experience across different screens.
                </li>
                <li>
                  <strong>Theme Toggle:</strong> Dark/light theme toggle for the
                  website.
                </li>
                <li>
                  <strong>JWT Token Usage:</strong> Token-based authentication
                  for CRUD operations in specified routes.
                </li>
                <li>
                  <strong>Downloadable Pages:</strong> Page of a book is
                  downloadable in pdf format.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* TECHNOLOGIES USED */}
        <div className="mb-10">
          <h1
            className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-2"
            data-aos="fade-up"
          >
            Technologies
          </h1>
          <div className="mb-2" data-aos="fade-right">
            <h5 className="font-text font-medium uppercase">Frontend</h5>
            <hr className="mb-2" />
            <div className="flex flex-wrap gap-1">
              <SkillBadge
                skills={[
                  "React.js",
                  "Tailwind",
                  "DaisyUI",
                  "Flowbite",
                  "React Icons",
                  "React Router",
                  "Firebase",
                  "Sonner",

                  "SwiperJS",
                  "react-rating",
                ]}
              ></SkillBadge>
            </div>
          </div>
          <div data-aos="fade-right">
            <h5 className="font-text font-medium uppercase">Backend</h5>
            <hr className="mb-2" />
            <div className="flex flex-wrap gap-1">
              <SkillBadge
                skills={[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Vercel",
                  "Cors",
                  "Dotenv",
                  "JWT",
                ]}
              ></SkillBadge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopShelf;
