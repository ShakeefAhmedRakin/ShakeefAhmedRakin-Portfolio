import SkillBadge from "../../../../Components/SkillBadge";

const FullStackModal = () => {
  // Define the skills for front-end, back-end, and hosting services
  const frontEndSkills = [
    "HTML5",
    "CSS3",
    "MaterialUI",
    "Tailwind CSS",
    "ShadCN",
    "React.js",
    "Next.js",
    "Axios",
    "TanStack Query",
    "Supabase",
  ];

  const backEndSkills = [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT (JSON Web Tokens)",
    "Middleware",
    "Cors",
    "Stripe API",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  const hostingServices = ["Firebase Hosting", "Netlify", "Vercel"];

  const tools = [
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "VS Code",
    "Visual Studio",
  ];

  return (
    <>
      {/* FULL STACK DEVELOPMENT MODAL */}
      <div>
        <input type="checkbox" id="ModalFullStack" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="text-lg font-bold text-[#054152]">
              Full Stack Development
            </h3>
            <div className="w-12 p-0.5 bg-[#054152] mt-2"></div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#054152] mb-2">
              Front-end Development
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={frontEndSkills} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#054152] mb-2">
              Back-end Development
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={backEndSkills} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#054152] mb-2">
              Hosting Services
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={hostingServices} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#054152] mb-2">
              Tools
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={tools} />
            </div>

            <div className="modal-action">
              <label
                htmlFor="ModalFullStack"
                className="btn w-full bg-[#054152] text-white hover:bg-[#054152]"
              >
                Close
              </label>
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="ModalFullStack"></label>
        </div>
      </div>
    </>
  );
};

export default FullStackModal;
