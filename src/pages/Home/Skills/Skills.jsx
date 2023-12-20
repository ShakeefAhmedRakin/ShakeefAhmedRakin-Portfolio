import SkillBadge from "../../../Components/SkillBadge";

const Skills = () => {
  return (
    <>
      <div className="flex justify-center">
        <img src="/Skills.png" className="max-w-lg w-full relative -bottom-2" />
      </div>
      <div className="bg-primary pt-12 pb-20">
        <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
          <p className="text-secondary text-center font-text text-sm">
            Technologies
          </p>
          <h1 className="text-background text-center font-heading font-bold text-2xl lg:text-5xl tracking-[4px]">
            SKILLS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
            {/* PROGRAMMING LANGUAGES */}
            <div className="bg-background shadow-xl rounded-lg font-text p-4">
              <h1 className="font-heading tracking-[1px] font-bold text-xl">
                Programming Languages
              </h1>
              <hr className="mt-1 mb-3" />
              <div className="flex flex-wrap gap-1">
                <SkillBadge
                  skills={["JavaScript", "Python", "PHP", "x86", "C"]}
                ></SkillBadge>
              </div>
            </div>
            {/* FRONTEND */}
            <div className="bg-background shadow-xl rounded-lg font-text p-4">
              <h1 className="font-heading tracking-[1px] font-bold text-xl">
                Frontend Development
              </h1>
              <hr className="mt-1 mb-3" />
              <div className="flex flex-wrap gap-1">
                <SkillBadge
                  skills={[
                    "HTML5",
                    "CSS3",
                    "Tailwind",
                    "Bootstrap",
                    "MaterialUI",
                    "React.js",
                    "Axios",
                    "TanStack",
                    "Firebase Auth",
                  ]}
                ></SkillBadge>
              </div>
            </div>
            {/* BACKEND */}
            <div className="bg-background shadow-xl rounded-lg font-text p-4">
              <h1 className="font-heading tracking-[1px] font-bold text-xl">
                Backend Development
              </h1>
              <hr className="mt-1 mb-3" />
              <div className="flex flex-wrap gap-1">
                <SkillBadge
                  skills={[
                    "Node.js",
                    "Express.js",
                    "RESTful APIs",
                    "JWT",
                    "Stripe API",
                    "MongoDB",
                    "MySQL",
                  ]}
                ></SkillBadge>
              </div>
            </div>
            {/* Tools & Deployment */}
            <div className="bg-background shadow-xl rounded-lg font-text p-4">
              <h1 className="font-heading tracking-[1px] font-bold text-xl">
                Tools & Deployment
              </h1>
              <hr className="mt-1 mb-3" />
              <div className="flex flex-wrap gap-1">
                <SkillBadge
                  skills={[
                    "Git",
                    "Npm",
                    "ESLint",
                    "Surge",
                    "Vercel",
                    "Firebase Hosting",
                    "Netlify",
                  ]}
                ></SkillBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
