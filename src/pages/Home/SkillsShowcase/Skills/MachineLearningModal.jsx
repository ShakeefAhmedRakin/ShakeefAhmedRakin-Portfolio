import SkillBadge from "../../../../Components/SkillBadge";

const MachineLearningModal = () => {
  const algorithms = [
    "Logistic Regression",
    "Decision Trees",
    "Random Forests",
    "Naive Bayes",
    "Grid Search",
    "K Nearest Neighbors",
    "Neural Networks",
    "Convulutional Neural Networks (CNNs)",
    "Binarized Neural Networks (BNNs)",
    "Support Vector Machines",
    "Early Stopping",
  ];

  const nlp = [
    "Text Preprocessing",
    "Tokenization",
    "Lemmatization",
    "Stopwords Removal",
    "TF-IDF",
    "Feature Extraction",
    "Model Evaluation",
  ];

  const data_preprocessing = [
    "Data Visualization",
    "Data Cleaning",
    "Data Augmentation",
    "Imputation",
    "Encoding Categorical Features",
    "Feature Selection",
    "Dimensionality Reduction",
    "Scaling (Min-Max Scaling)",
  ];

  const frameworks = [
    "TensorFlow",
    "Keras",
    "Larq",
    "Scikit-learn",
    "Pandas",
    "NumPy",
  ];

  const tools = ["Jupyter Notebook", "Google Colab", "Anaconda"];

  const libraries = ["Matplotlib", "Seaborn", "NLTK"];

  const computerVision = [
    "Image Classification",
    "Object Detection",
    "Image Preprocessing",
    "CUDA Cores",
  ];

  return (
    <>
      {/* MACHINE LEARNING MODAL */}
      <div>
        <input
          type="checkbox"
          id="ModalMachineLearning"
          className="modal-toggle"
        />
        <div className="modal" role="dialog">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="text-lg font-bold text-[#2D105D]">
              Machine Learning
            </h3>
            <div className="w-12 p-0.5 bg-[#2D105D] mt-2"></div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#2D105D] mb-2">
              Algorithms
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={algorithms} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#2D105D] mb-2">
              Data Preprocessing Techniques
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={data_preprocessing} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#2D105D] mb-2">
              Natural Language Processing (NLP)
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={nlp} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#2D105D] mb-2">
              Computer Vision Techniques
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={computerVision} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#2D105D] mb-2">
              Frameworks
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={frameworks} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#2D105D] mb-2">
              Tools
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={tools} />
            </div>

            <h4 className="font-bold mt-4 text-xs md:text-base text-[#2D105D] mb-2">
              Libraries
            </h4>
            <div className="flex flex-wrap gap-1">
              <SkillBadge skills={libraries} />
            </div>

            <div className="modal-action">
              <label
                htmlFor="ModalMachineLearning"
                className="btn w-full bg-[#2D105D] text-white hover:bg-[#2D105D]"
              >
                Close
              </label>
            </div>
          </div>
          <label
            className="modal-backdrop"
            htmlFor="ModalMachineLearning"
          ></label>
        </div>
      </div>
    </>
  );
};

export default MachineLearningModal;
