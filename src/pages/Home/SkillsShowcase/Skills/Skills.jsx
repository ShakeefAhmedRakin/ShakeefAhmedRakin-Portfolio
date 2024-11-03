import { SiSitepoint } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import FullStackModal from "./FullStackModal";
import MachineLearningModal from "./MachineLearningModal";
import { LuAppWindow } from "react-icons/lu";
import SoftwareDevelopmentModal from "./SoftwareDevelopmentModal";

const Skills = () => {
  return (
    <>
      <FullStackModal></FullStackModal>
      <MachineLearningModal></MachineLearningModal>
      <SoftwareDevelopmentModal></SoftwareDevelopmentModal>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* FULL STACK DEVELOPER */}
        <div
          className="flex bg-white flex-col items-center justify-center pt-10 shadow rounded-xl h-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-sm md:text-base font-medium text-center">
            Full Stack Development
          </h1>
          <hr className="w-1/4 mx-auto mt-2 border-[#064152] border-[1px]" />
          <SiSitepoint className="text-5xl md:text-7xl text-[#064152] mt-7 md:mt-10 mb-10 md:mb-16"></SiSitepoint>
          <label
            htmlFor="ModalFullStack"
            className="w-full rounded-b-xl bg-[#064152] text-white btn btn-sm md:btn-md text-xs md:text-base shadow-none border-none rounded-t-none mt-auto hover:bg-[#064152]"
          >
            Learn More
          </label>
        </div>
        {/* MACHINE LEARNING */}
        <div
          className="flex bg-white flex-col items-center justify-center pt-10 shadow rounded-xl h-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-sm md:text-base font-medium text-center">
            AI & Machine Learning
          </h1>
          <hr className="w-1/4 mx-auto mt-2 border-[#2D105D] border-[1px]" />
          <GiArtificialIntelligence className="text-5xl md:text-7xl text-[#2D105D] mt-7 md:mt-10 mb-10 md:mb-16"></GiArtificialIntelligence>
          <label
            htmlFor="ModalMachineLearning"
            className="w-full rounded-b-xl bg-[#2D105D] text-white btn btn-sm md:btn-md text-xs md:text-base shadow-none border-none rounded-t-none mt-auto hover:bg-[#2D105D]"
          >
            Learn More
          </label>
        </div>
        {/* SOFTWARE DEVELOPMENT */}
        <div
          className="flex bg-white flex-col items-center justify-center pt-10 shadow rounded-xl h-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-sm md:text-base font-medium text-center">
            Software Development
          </h1>
          <hr className="w-1/4 mx-auto mt-2 border-[#0BAA8C] border-[1px]" />
          <LuAppWindow className="text-5xl md:text-7xl text-[#0BAA8C] mt-7 md:mt-10 mb-10 md:mb-16"></LuAppWindow>
          <label
            htmlFor="ModalSoftwareDevelopment"
            className="w-full rounded-b-xl bg-[#0BAA8C] text-white btn btn-sm md:btn-md text-xs md:text-base shadow-none border-none rounded-t-none mt-auto hover:bg-[#0BAA8C]"
          >
            Learn More
          </label>
        </div>
      </div>
    </>
  );
};

export default Skills;
