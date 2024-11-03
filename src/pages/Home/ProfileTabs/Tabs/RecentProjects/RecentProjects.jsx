import { BiDonateBlood } from "react-icons/bi";
import ProjectCard from "../../../../../Components/ProjectCard";
import { FaArrowRight, FaSeedling, FaSignLanguage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RecentProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {/* PROJECT: BloodBridge */}
        <ProjectCard
          to="/bloodbridge"
          imageSrc="projects/bloodbridge/bloodbridgecard.png"
          projectTitle="BloodBridge"
          projectDescription="Blood Donation Website"
          stack={["MongoDB", "Express", "React", "Node.js", "Firebase"]}
          IconComponent={BiDonateBlood}
          ImgComponent={""}
          accentColor="#d70427"
          aosDelay="100"
          underDev={false}
        />
        {/* PROJECT: AgriSmart */}
        <ProjectCard
          to="/agrismart"
          imageSrc="/projects/agrismart/agrismartcard.png"
          projectTitle="AgriSmart"
          projectDescription="Farm Management Website"
          stack={[
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Firebase",
            "Gemini AI",
          ]}
          IconComponent={FaSeedling}
          ImgComponent={""}
          accentColor="#416322"
          aosDelay="200"
          underDev={false}
        />
        {/* PROJECT: MASRETT */}
        <ProjectCard
          to="/masrett"
          imageSrc="/projects/masrett/masrettcard.png"
          projectTitle="MASRETT"
          projectDescription="Real-Time Malaysian Sign Language Learning Platform"
          stack={[
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Firebase",
            "Gemini AI",
          ]}
          IconComponent={FaSignLanguage}
          ImgComponent={""}
          accentColor="#19B8E9"
          aosDelay="300"
          underDev={true}
        />
      </div>
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button
          onClick={() => navigate("/projects")}
          className="btn bg-transparent text-primary shadow-none border-none hover:bg-primary hover:text-white mt-10"
        >
          View All Projects <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
