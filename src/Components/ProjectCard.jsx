import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = ({
  to,
  imageSrc,
  projectTitle,
  projectDescription,
  stack, // Expecting an array of strings
  IconComponent,
  ImgComponent = "",
  accentColor,
  aosDelay = "200",
  underDev,
}) => {
  console.log(ImgComponent);
  return (
    <Link
      to={to}
      className="rounded-2xl h-full"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="shadow-md p-3 border rounded-2xl group hover:shadow-xl duration-300 h-full relative">
        <div className="bg-accent rounded-xl relative">
          <img
            src={imageSrc}
            alt={projectTitle}
            className="rounded-xl opacity-0 group-hover:opacity-100 duration-500"
          />
          <div
            style={{ color: accentColor }}
            className="inset-0 opacity-100 group-hover:opacity-0 duration-500 flex absolute items-center gap-1 py-16 md:py-20 rounded-xl justify-center h-full"
          >
            {IconComponent && <IconComponent className="text-4xl" />}
            {ImgComponent && <img src={ImgComponent} className="w-16"></img>}
            <h1 className="font-heading text-xl md:text-4xl font-semibold">
              {projectTitle}
            </h1>
          </div>
        </div>
        <div className="px-4 flex justify-between">
          <div className="flex-1">
            {underDev ? (
              <span className="badge-sm badge badge-red text-[10px]  text-red-500 font-bold -ml-1">
                Under Development
              </span>
            ) : (
              <span className="badge-sm badge badge-red border-none text-[10px]"></span>
            )}
            <h1 className="text-lg font-medium">{projectDescription}</h1>
            <div className="flex flex-wrap gap-1.5 mt-2 -ml-1 mb-3">
              {stack.map((item, index) => (
                <span key={`${item}-${index}`} className="badge-sm badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center text-5xl text-gray-300 opacity-0 right-5 bottom-5 group-hover:opacity-100 duration-300 absolute">
          <IoIosArrowForward className="duration-300 bottom-0 absolute -right-2 group-hover:-right-5" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
