import ProjectCard from "../../../Components/ProjectCard";

const MachineLearning = () => {
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
            AI & Machine Learning Projects
          </h1>
          <hr className="my-4" data-aos="fade-up" data-aos-delay="100" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* PROJECT: Offensive Tweet Classifier */}
            <ProjectCard
              to="/projects/machinelearning/offensive-tweet-classifier"
              imageSrc="/projects/offensivetweet/offensivetweet.png"
              projectTitle="Offensive Tweet Classifier"
              projectDescription="Offensive Tweet Detection"
              stack={[
                "Pandas",
                "Scikit-Learn",
                "NLTK",
                "TF-IDF Vectorizer",
                "Logistic Regression",
              ]}
              IconComponent={""}
              ImgComponent={""}
              accentColor="#2D105D"
              aosDelay="200"
              underDev={false}
            />
            {/* PROJECT : Lung Cancer Prediction */}
            <ProjectCard
              to="/projects/machinelearning/lung-cancer-prediction"
              imageSrc="/projects/lungcancer/lungcancer.png"
              projectTitle="Lung Cancer Prediction"
              projectDescription="Lung Cancer Detection using CSV Data"
              stack={[
                "Random Forest",
                "Naive Bayes",
                "SVM",
                "K-Nearest",
                "Decision Tree",
              ]}
              IconComponent={""}
              ImgComponent={""}
              accentColor="#E34F56"
              aosDelay="200"
              underDev={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
