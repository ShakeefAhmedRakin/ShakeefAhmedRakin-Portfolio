import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCardHorizontal = ({
  to,
  imageSrc,
  projectTitle,
  projectDescription,
  projectDetails,
  stack,
  underDev,
}) => {
  return (
    <Link
      to={to}
      className="rounded-2xl h-full"
      data-aos="fade-up"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-3 border rounded-2xl group hover:shadow-md duration-300 flex-col gap-4 h-full relative flex items-start">
        {/* Information Section */}
        <div className="flex flex-col h-full">
          <p className="text-base md:text-xl mb-3 font-medium">
            <span className="line-clamp-1">{projectDescription}</span>
          </p>
          <p className="text-xs mb-4 text-gray-500 max-w-[95%] flex-1">
            {projectDetails}
          </p>

          {/* Stack badges */}
          <div className="flex flex-wrap gap-0 xl:gap-1.5 -ml-1 mb-3">
            {stack.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="badge-xs badge text-[9px] xl:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* External Link Icon */}
        <BiLinkExternal className="text-sm absolute right-2 top-2" />

        {/* Under Dev Badge */}
        {underDev && (
          <span className="badge-xs badge text-[8px] text-red-500 absolute top-1 left-2 border-none">
            Under Development
          </span>
        )}

        {/* Image On Hover */}
        <img
          src={imageSrc}
          alt={projectTitle}
          className="absolute inset-0 w-full h-full object-cover top-0 opacity-0 group-hover:opacity-10 duration-500"
        />

        {/* Forward Arrow On Hover */}
        <div className="flex items-center text-3xl text-gray-300 opacity-0 right-5 bottom-1 group-hover:opacity-100 duration-300 absolute">
          <IoIosArrowForward className="duration-300 bottom-0 absolute -right-2 group-hover:-right-5" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCardHorizontal;
