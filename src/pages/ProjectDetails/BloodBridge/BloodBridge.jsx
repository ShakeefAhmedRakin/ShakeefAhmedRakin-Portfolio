import PageTitle from "../../../Components/PageTitle";
import { TbBrandGithub } from "react-icons/tb";
import { CgBrowser } from "react-icons/cg";
import SkillBadge from "../../../Components/SkillBadge";

const BloodBridge = () => {
  return (
    <>
      <PageTitle title={"Project Details"} subtitle={"BloodBridge"}></PageTitle>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
        {/* PROJECT OVERVIEW AND MOCKUP */}
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-5 mb-16">
          <div className="flex-1">
            <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-3">
              Project Overview
            </h1>
            <p className="font-text text-sm lg:text-base mb-5">
              {
                "The Blood Donation Application is a comprehensive platform designed to facilitate and streamline blood donation activities. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this application serves as a user-friendly interface connecting  blood donors with individuals in need of blood donations. It focuses on user roles, authentication, donation requests, content  management, and role-based access control to ensure efficient and secure blood donation processes."
              }
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://bloodbridge-140aa.web.app"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <CgBrowser className="text-lg md:text-2xl"></CgBrowser>Go To
                Website
              </a>
              <a
                href="https://github.com/ShakeefAhmedRakin/BloodBridge-Client"
                target="blank"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <TbBrandGithub className="text-lg md:text-2xl"></TbBrandGithub>
                Client
              </a>
              <a
                href="https://github.com/ShakeefAhmedRakin/BloodBridge-Server"
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
                    href="https://bloodbridge-140aa.web.app/"
                    target="blank"
                    className="hover:link"
                  >
                    https://bloodbridge-140aa.web.app
                  </a>
                </div>
              </div>
              <img src="/projects/bloodbridge/overview.png" alt="" />
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
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#d70427]">
                Roles and Permissions Management
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Admin Role:</strong> Full access to user management,
                  donation requests, and content management.
                </li>
                <li>
                  <strong>Donor Role:</strong> Registration, donation request
                  creation, profile management, and donation response.
                </li>
                <li>
                  <strong>Volunteer Role:</strong> Limited access to update
                  donation statuses, view donation requests and content
                  management.
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#d70427]">
                Authentication and Registration
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  Secure user registration with email, name, avatar upload,
                  blood group selection, and address details.
                </li>
                <li>
                  {
                    "Admin ability to block users, defaulting to an 'active' status upon registration."
                  }
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#d70427]">
                Dashboard Functionality
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Profile Pages:</strong> Allow users to view and update
                  personal information, excluding email.
                </li>
                <li>
                  <strong>Donor Dashboard:</strong> Display recent donation
                  requests and their details (recipient name, location, status,
                  etc.). Ability to manage their donation requests (add, edit,
                  delete, view)
                </li>
                <li>
                  <strong>Admin Dashboard:</strong> Statistical representation
                  (total users, funding, blood donation requests). User
                  management with role changes and blocking/unblocking. Ability
                  to manage all donation requests (add, edit, delete, view).
                  Content management for blogs (creation, publishing, deletion).
                </li>
                <li>
                  <strong>Volunteer Dashboard:</strong> Statistical
                  representation (total users, funding, blood donation
                  requests). Ability to manage all donation requests (edit,
                  view). Content management for blogs (creation only).
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#d70427]">
                Donation Request Management
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  Creation of donation requests with recipient details, hospital
                  information, and request message etc.
                </li>
                <li>
                  Donors can update and manage their own donation requests.
                </li>
                <li>
                  Admin access to manage all donation requests made on the
                  platform with volunteers having limited permissions
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#d70427]">
                Website Pages
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>Search Page:</strong> Allows users to search for
                  donors based on blood group, district, and upazilla.
                </li>
                <li>
                  <strong>Requests Page:</strong> Displays pending donation
                  requests for public viewing.
                </li>
                <li>
                  <strong>Blog Page:</strong> Showcases published blogs.
                </li>
                <li>
                  <strong>Funding Page:</strong> Enables user donations to the
                  organization with Stripe payment integration.
                </li>
              </ul>
            </div>
            {/* FEATURE */}
            <div className="font-text">
              <h1 className="font-bold text-sm md:text-lg mb-1 text-[#d70427]">
                Additional Features
              </h1>
              <ul className="list-disc mx-auto w-[90%] text-xs md:text-sm space-y-2">
                <li>
                  <strong>JWT Implementation:</strong> Secure login using JWT
                  tokens and protection of all private APIs.
                </li>
                <li>
                  <strong>Responsive Design:</strong> Ensures the website and
                  dashboard are accessible and functional across all devices.
                </li>
                <li>
                  <strong>Blog Creation:</strong> Blogs created using
                  jodit-react for rich text editing.
                </li>
                <li>
                  <strong>Firebase Authentication:</strong> Secure login and
                  registration are facilitated through Firebase, ensuring robust
                  authentication processes and user management.
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
                  "MaterialUI",
                  "Flowbite",
                  "React Icons",
                  "React Router",
                  "TanStack Query",
                  "Axios",
                  "React Hook Form",
                  "Firebase",
                  "Sonner",
                  "Sweet Alert",
                  "Stripe",
                  "jodit-react",
                  "react-share",
                  "AOS",
                  "React Helmet",
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
                  "JWT",
                  "Stripe API",
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

export default BloodBridge;
