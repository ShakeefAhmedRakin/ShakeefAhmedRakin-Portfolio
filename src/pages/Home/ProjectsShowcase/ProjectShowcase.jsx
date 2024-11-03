import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ProjectCardHorizontal from "../../../Components/ProjectCardHorizontal";
import { BiLinkExternal } from "react-icons/bi";

const ProjectShowcase = () => {
  const navigate = useNavigate();

  return (
    <section
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      aria-labelledby="project-showcase-title"
    >
      {/* TITLE */}
      <header className="mb-6">
        <h1
          id="project-showcase-title"
          data-aos="fade-down"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head text-center"
          role="heading"
          aria-level="1"
        >
          Projects<span className="text-primary">.</span>
        </h1>
        <div
          className="w-12 p-0.5 bg-primary my-4 mx-auto"
          data-aos="fade-down"
        />
        <p
          className="font-text max-w-2xl mb-4 text-center mx-auto"
          data-aos="fade-up"
        >
          A collection of some of my projects showcasing my skills in web
          development, data analysis, and AI.{" "}
          <Link
            to="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-primary flex gap-1 items-center mt-1 w-fit text-center mx-auto"
            aria-label="View all projects"
          >
            View all projects <BiLinkExternal />
          </Link>
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* PROJECT: BloodBridge */}
        <ProjectCardHorizontal
          to="/projects/webdev/bloodbridge"
          imageSrc="projects/bloodbridge/bloodbridgecard.png"
          projectTitle="BloodBridge"
          projectDescription="Blood Donation Website"
          projectDetails={
            "The Blood Donation Application is a platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that connects blood donors with those in need. It features user role management, secure authentication, donation request handling, and an intuitive dashboard for users, admins, and volunteers."
          }
          stack={["MongoDB", "Express", "React", "Node.js", "Firebase"]}
          underDev={false}
        />
        {/* PROJECT: AgriSmart */}
        <ProjectCardHorizontal
          to="/projects/webdev/agrismart"
          imageSrc="/projects/agrismart/agrismartcard.png"
          projectTitle="AgriSmart"
          projectDescription="Farm Management Website"
          projectDetails={
            "The AgriSmart Application is a comprehensive farm management platform designed to streamline agricultural operations, including crop management, yield tracking, and data analysis for enhanced decision-making."
          }
          stack={[
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Firebase",
            "Gemini AI",
          ]}
          underDev={false}
        />
        {/* PROJECT: Offensive Tweet */}
        <ProjectCardHorizontal
          to="/projects/machinelearning/offensive-tweet-classifier"
          imageSrc="/projects/offensivetweet/offensivetweet.png"
          projectTitle="Offensive Tweet Classifier"
          projectDescription="Offensive Tweet Detection"
          projectDetails={
            "Utilizes machine learning to classify tweets as offensive or non-offensive and categorize the offensive content. The model leverages the Offensive Language Identification Dataset (OLID) and applies preprocessing techniques followed by logistic regression for training. Users can input a tweet to receive classification results and offense type categorization."
          }
          stack={[
            "Pandas",
            "Scikit-Learn",
            "NLTK",
            "TF-IDF Vectorizer",
            "Logistic Regression",
          ]}
          underDev={false}
        />
        {/* PROJECT: MASRETT */}
        <ProjectCardHorizontal
          to="/projects/webdev/masrett"
          imageSrc="/projects/masrett/masrettcard.png"
          projectTitle="MASRETT"
          projectDescription="Real-Time Malaysian Sign Language Learning Platform"
          projectDetails={
            "MASRETT is a platform aimed at teaching Malaysian Sign Language in real time using interactive lessons and assessments, leveraging advanced technology for better learning outcomes."
          }
          stack={[
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Firebase",
            "Gemini AI",
          ]}
          underDev={true}
        />
      </div>
      <div className="flex justify-center" data-aos="fade-up">
        <button
          onClick={() => navigate("/projects")}
          className="btn bg-transparent text-primary shadow-none border-none hover:bg-primary hover:text-white mt-10"
          aria-label="View All Projects"
        >
          View All Projects <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectShowcase;
