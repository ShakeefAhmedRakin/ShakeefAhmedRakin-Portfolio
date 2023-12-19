const Skills = () => {
  return (
    <>
      <div className="flex justify-center">
        <img src="/Skills.png" className="max-w-lg w-full relative -bottom-2" />
      </div>
      <div className="bg-primary py-12">
        <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
          <p className="text-secondary text-center font-text text-sm">
            TECHNOLOGIES
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
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  JavaScript
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Python
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  PHP
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  x86
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  C
                </span>
              </div>
            </div>
            {/* FRONTEND */}
            <div className="bg-background shadow-xl rounded-lg font-text p-4">
              <h1 className="font-heading tracking-[1px] font-bold text-xl">
                Frontend Development
              </h1>
              <hr className="mt-1 mb-3" />
              <div className="flex flex-wrap gap-1">
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  HTML5
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  CSS3
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Tailwind
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Bootstrap
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  MaterialUI
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  React.js
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Axios
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  TanStack
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Firebase Auth
                </span>
              </div>
            </div>
            {/* BACKEND */}
            <div className="bg-background shadow-xl rounded-lg font-text p-4">
              <h1 className="font-heading tracking-[1px] font-bold text-xl">
                Backend Development
              </h1>
              <hr className="mt-1 mb-3" />
              <div className="flex flex-wrap gap-1">
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Node.js
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Express.js
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  RESTful APIs
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  JWT
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Stripe API
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  MongoDB
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  MySQL
                </span>
              </div>
            </div>
            {/* Tools & Deployment */}
            <div className="bg-background shadow-xl rounded-lg font-text p-4">
              <h1 className="font-heading tracking-[1px] font-bold text-xl">
                Tools & Deployment
              </h1>
              <hr className="mt-1 mb-3" />
              <div className="flex flex-wrap gap-1">
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Git
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Npm
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  ESLint
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Surge
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Vercel
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Firebase Hosting
                </span>
                <span className="text-white bg-primary font-medium px-3 py-1 shadow-xl rounded-xl">
                  Netlify
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
