import ExperienceTimeline from "../../../Components/ExperienceTimeline";

const Experience = () => {
  return (
    <>
      <div className="flex justify-center">
        <img
          src="/experience.png"
          className="max-w-lg w-full relative -bottom-2"
        />
      </div>
      <div className="pb-56">
        <div className="bg-primary py-12 shadow-xl">
          <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
            <p className="text-secondary text-center font-text text-sm">
              Technologies
            </p>
            <h1 className="text-background text-center font-heading font-bold text-2xl lg:text-5xl tracking-[3px]">
              EXPERIENCES
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 mt-24 min-h-[53vh]">
          <ExperienceTimeline></ExperienceTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
