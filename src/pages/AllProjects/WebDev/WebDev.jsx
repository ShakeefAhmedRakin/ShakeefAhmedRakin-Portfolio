import ProjectCard from "../../../Components/ProjectCard";
import { BiDonateBlood } from "react-icons/bi";
import { PiComputerTowerBold } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { MdEventRepeat } from "react-icons/md";
import { FaSeedling } from "react-icons/fa";
import { FaSignLanguage } from "react-icons/fa";

const WebDev = () => {
  return (
    <div>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 flex flex-col min-h-screen py-10 md:py-0">
        {/* WEB DEVELOPMENT PROJECTS */}
        <div className="mt-2 my-10">
          <h1
            className="text-text font-bold text-base md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Web Development Projects
          </h1>
          <hr className="my-4" data-aos="fade-up" data-aos-delay="100" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* PROJECT: BloodBridge */}
            <ProjectCard
              to="/projects/webdev/bloodbridge"
              imageSrc="/projects/bloodbridge/bloodbridgecard.png"
              projectTitle="BloodBridge"
              projectDescription="Blood Donation Website"
              stack={["MongoDB", "Express", "React", "Node.js", "Firebase"]}
              IconComponent={BiDonateBlood}
              ImgComponent={""}
              accentColor="#d70427"
              aosDelay="200"
              underDev={false}
            />

            {/* PROJECT: Comp Harbor */}
            <ProjectCard
              to="/projects/webdev/compharbor"
              imageSrc="/projects/compharbor/compharborcard.png"
              projectTitle="Comp Harbor"
              projectDescription="Tech E-Commerce Website"
              stack={["MongoDB", "Express", "React", "Node.js", "Firebase"]}
              IconComponent={PiComputerTowerBold}
              ImgComponent={""}
              accentColor="#38529E"
              aosDelay="200"
              underDev={false}
            />

            {/* PROJECT: TopShelf */}
            <ProjectCard
              to="/projects/webdev/topshelf"
              imageSrc="/projects/topshelf/topshelfcard.png"
              projectTitle="TopShelf"
              projectDescription="Online Library Website"
              stack={["MongoDB", "Express", "React", "Node.js", "Firebase"]}
              IconComponent={ImBooks}
              ImgComponent={""}
              accentColor="#F05454"
              aosDelay="200"
              underDev={false}
            />
            {/* PROJECT: TaskLogger */}
            <ProjectCard
              to="/projects/webdev/tasklogger"
              imageSrc="/projects/tasklogger/taskloggercard.png"
              projectTitle="TaskLogger"
              projectDescription="Interactive Task Manager"
              stack={["MongoDB", "Express", "React", "Node.js", "Firebase"]}
              IconComponent={""}
              ImgComponent={"/projects/tasklogger/tasklogger-logo.png"}
              accentColor="#E57C23"
              aosDelay="200"
              underDev={false}
            />
            {/* PROJECT: AgriSmart */}
            <ProjectCard
              to="/projects/webdev/agrismart"
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
              to="/projects/webdev/masrett"
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
              aosDelay="200"
              underDev={true}
            />
            {/* PROJECT: GeekFest */}
            <ProjectCard
              to="/projects/webdev/geekfest"
              imageSrc="/projects/geekfest/geekfestcard.png"
              projectTitle="GeekFest"
              projectDescription="Event Management Website (Frontend)"
              stack={["React", "Firebase"]}
              IconComponent={MdEventRepeat}
              ImgComponent={""}
              accentColor="#8B5CF6"
              aosDelay="200"
              underDev={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
