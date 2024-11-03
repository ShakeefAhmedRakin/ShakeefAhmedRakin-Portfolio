import { FaArrowRight } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiFuturelearn } from "react-icons/si";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 flex flex-col min-h-screen py-10 md:py-0">
        <div>
          <h1
            className="text-text font-bold text-base md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Project Categories
          </h1>
          {/* PROJECT CATEGORY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {/* WEB DEVELOPMENT */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div
                className="flex flex-col h-full gap-3 card card-body shadow-md relative group bg-white hover:bg-primary hover:shadow-2xl duration-500 cursor-pointer"
                onClick={() => navigate("/projects/webdev")}
              >
                <CgWebsite className="text-primary group-hover:text-background duration-500 text-6xl"></CgWebsite>
                <h1 className="font-bold group-hover:text-background duration-500 text-sm lg:text-base">
                  Web Development
                </h1>
                <p className="text-xs lg:text-sm mb-6 group-hover:text-background duration-500">
                  Projects focused on full-stack web development, featuring
                  backend architectures, responsive frontends, and AI
                  implementations.
                </p>
                <div className="absolute bottom-5 right-5 text-text group-hover:text-background">
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div>
            {/* MACHINE LEARNING */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div
                className="flex flex-col h-full gap-3 card card-body shadow-md relative group bg-white hover:bg-primary hover:shadow-2xl duration-500 cursor-pointer"
                onClick={() => navigate("/projects/machinelearning")}
              >
                <SiFuturelearn className="text-primary group-hover:text-background duration-500 text-6xl"></SiFuturelearn>
                <h1 className="font-bold group-hover:text-background duration-500 text-sm lg:text-base">
                  AI & Machine Learning
                </h1>
                <p className="text-xs lg:text-sm mb-6 group-hover:text-background duration-500">
                  Projects including predictive modeling, natural language
                  processing, and computer vision.
                </p>
                <div className="absolute bottom-5 right-5 text-text group-hover:text-background">
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div>
            {/* MISC */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col h-full gap-3 card card-body shadow-md relative group bg-white hover:bg-primary hover:shadow-2xl duration-500 cursor-pointer">
                <GiPerspectiveDiceSixFacesRandom className="text-primary group-hover:text-background duration-500 text-6xl"></GiPerspectiveDiceSixFacesRandom>
                <h1 className="font-bold group-hover:text-background duration-500 text-sm lg:text-base">
                  Miscellaneous
                </h1>
                <p className="text-xs lg:text-sm mb-6 group-hover:text-background duration-500">
                  Projects spanning diverse domains, including utility tools,
                  experimental applications and side projects.
                </p>
                <div className="absolute bottom-5 right-5 text-text group-hover:text-background">
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
