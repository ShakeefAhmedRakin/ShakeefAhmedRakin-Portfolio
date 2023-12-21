import PageTitle from "../../../Components/PageTitle";
import { TbBrandGithub } from "react-icons/tb";
import { CgBrowser } from "react-icons/cg";
import SkillBadge from "../../../Components/SkillBadge";

const CompHarbor = () => {
  return (
    <>
      <PageTitle title={"Project Details"} subtitle={"Comp Harbor"}></PageTitle>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
        {/* PROJECT OVERVIEW AND MOCKUP */}
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-5 mb-16">
          <div className="flex-1">
            <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-3">
              Project Overview
            </h1>
            <p className="font-text text-sm lg:text-base mb-5">
              {
                "Computer Harbor is a comprehensive tech e-commerce platform catering to various tech brands and their products. It provides an intuitive interface for users to browse, add, and manage products from different brands while ensuring a secure and user-friendly experience."
              }
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://bytebrilliance-5c61e.web.app/"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <CgBrowser className="text-lg md:text-2xl"></CgBrowser>Go To
                Website
              </a>
              <a
                href="https://github.com/ShakeefAhmedRakin/CompHarbor-client"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <TbBrandGithub className="text-lg md:text-2xl"></TbBrandGithub>
                Client
              </a>
              <a
                href="https://github.com/ShakeefAhmedRakin/CompHarbor-server"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <TbBrandGithub className="text-lg md:text-2xl"></TbBrandGithub>
                Server
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="mockup-browser border border-base-300 max-h-96 overflow-y-scroll rounded-r-none">
              <div className="mockup-browser-toolbar">
                <div className="input border border-base-300">
                  <a
                    href="https://bytebrilliance-5c61e.web.app/"
                    target="blank"
                    className="hover:link"
                  >
                    https://bytebrilliance-5c61e.web.app
                  </a>
                </div>
              </div>
              <img src="/projects/compharbor/overview.png" alt="" />
            </div>
          </div>
        </div>
        {/* ALL FEATURES */}
        <div className="mb-10">
          <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-5">
            Key Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#38529E]">
                Product Management
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Brand-Centric Display:</strong> Home page showcases
                  brand images and names, facilitating easy navigation to
                  specific brand-based product lists with advertisements.
                </li>
                <li>
                  <strong>Add/Update Product Page:</strong> Private route
                  enabling users to add new products or update existing products
                  via a detailed form with image upload and category-specific
                  details.
                </li>
                <li>
                  <strong>Product Pages:</strong> Detailed pages for products,
                  displaying relevant information and also allowing users to add
                  items to their cart.
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#38529E]">
                Cart Functionalities
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>My Cart Page:</strong> Private route displaying all
                  added products, allowing users to manage their cart by
                  deleting unwanted items.
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#38529E]">
                Cart Functionalities
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
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#38529E]">
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
              </ul>
            </div>
          </div>
        </div>
        {/* TECHNOLOGIES USED */}
        <div className="mb-10">
          <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-2">
            Technologies
          </h1>
          <div className="mb-2">
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
                  "AOS",
                  "SwiperJS",
                  "react-rating",
                ]}
              ></SkillBadge>
            </div>
          </div>
          <div>
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
                ]}
              ></SkillBadge>
            </div>
          </div>
        </div>
        {/* SCREENSHOTS */}
        {/* <div className="mb-10">
          <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-5">
            Screenshots
          </h1>
        </div> */}
      </div>
    </>
  );
};

export default CompHarbor;
