const LungCancerPrediction = () => {
  return (
    <div
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      data-aos="fade-up"
    >
      <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl tracking-[2px] mb-5">
        Lung Cancer Prediction using CSV Data
      </h1>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        This project was developed for the{" "}
        <span className="font-bold">CSE422 (Artificial Intelligence) </span>
        course at <span className="font-bold">BRAC University</span>. The aim is
        to predict the likelihood of lung cancer using various health and
        lifestyle indicators.
      </p>
      <p className="font-text text-sm lg:text-base mt-4 mb-5">
        Check out the project on my{" "}
        <a
          href="https://github.com/ShakeefAhmedRakin/LungCancerPrediction"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          GitHub Repository
        </a>
      </p>
      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Dataset Overview
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        The lung cancer dataset comprises 1,000 patient records, each containing
        various health and lifestyle indicators relevant to lung cancer
        diagnosis.
      </p>
      <h3 className="font-heading font-bold text-md lg:text-xl tracking-[2px] mb-3">
        Lung Cancer Dataset Structure:
      </h3>
      <ul className="list-disc pl-5 mb-5">
        <li>Patient Id: Unique identifier for each patient.</li>
        <li>Age: Age of the patient (in years).</li>
        <li>Gender: Gender of the patient.</li>
        <li>Air Pollution: Level of air pollution exposure.</li>
        <li>Alcohol use: Frequency of alcohol consumption.</li>
        <li>Dust Allergy: Presence of dust allergy.</li>
        <li>Occupational Hazards: Exposure to workplace hazards.</li>
        <li>Genetic Risk: Genetic predisposition to lung cancer.</li>
        <li>Chronic Lung Disease: History of chronic lung disease.</li>
        <li>Balanced Diet: Indicator of diet quality.</li>
        <li>Obesity: Body mass index.</li>
        <li>Smoking: Smoking status.</li>
        <li>Passive Smoker: Exposure to secondhand smoke.</li>
        <li>Chest Pain: Indicator of chest pain.</li>
        <li>Coughing of Blood: Indicator of coughing blood.</li>
        <li>Fatigue: Indicator of fatigue.</li>
        <li>Weight Loss: Significant weight loss history.</li>
        <li>Shortness of Breath: Indicator of shortness of breath.</li>
        <li>Wheezing: Indicator of wheezing.</li>
        <li>Clubbing of Finger Nails: Indicator of nail clubbing.</li>
        <li>Frequent Cold: Indicator of frequent colds.</li>
        <li>Dry Cough: Indicator of a dry cough.</li>
        <li>Snoring: Indicator of snoring.</li>
        <li>Level: Class of lung cancer risk.</li>
        <li>Result: Outcome of the diagnosis.</li>
      </ul>

      <h3 className="font-heading font-bold text-md lg:text-xl tracking-[2px] mb-3">
        Script For Introducing NULL Values
      </h3>
      <p className="font-text text-sm lg:text-base mb-5">
        Initially, the dataset had no null values or repeating columns. A Python
        script was created to introduce null values and add two repeating
        columns for learning data preprocessing techniques.
      </p>
      <img
        src="https://raw.githubusercontent.com/ShakeefAhmedRakin/LungCancerPrediction/refs/heads/main/script%20for%20inserting%20null%20values.PNG"
        className="w-auto mx-auto mb-5"
      />
      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Data Preprocessing
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        After loading the dataset, the following steps were taken:
      </p>
      <ul className="list-disc pl-5 mb-5">
        <li>
          Introduced artificial null values and two repeating columns for
          learning preprocessing techniques.
        </li>
        <li>
          Utilized imputation (strategy = mean) from sklearn to handle null
          values.
        </li>
        <li>
          Mapped categorical features like Gender and Level to numerical values
          for analysis.
        </li>
        <li>
          Dropped less impactful features, including Genetic Risk and
          Occupational Hazards, based on correlation analysis.
        </li>
        <li>
          Scaled the dataset using MinMaxScaler from sklearn and split it into
          75% training and 25% testing sets while keeping both the unscaled and
          scale variants.
        </li>
      </ul>
      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Model Training and Evaluation
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        Various models were trained and evaluated based on their performance on
        both the scaled and unscaled data:
      </p>
      <ul className="list-disc pl-5 mb-5">
        <li>Decision Tree</li>
        <li>Naive Bayes</li>
        <li>Random Forest</li>
        <li>Support Vector Machine</li>
        <li>Grid Search</li>
      </ul>
      <h3 className="font-heading font-bold text-md lg:text-xl tracking-[2px] mb-3">
        Evaluation Metrics:
      </h3>
      <p className="font-text text-sm lg:text-base mb-5">
        Models were evaluated based on precision, recall, F1-score, support, and
        accuracy, with confusion matrices visualized using seaborn heatmaps.
      </p>

      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Things I Learned
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        Throughout this project, I gained valuable insights into:
      </p>
      <ul className="list-disc pl-5 mb-5">
        <li>Data preprocessing techniques for handling missing values.</li>
        <li>Feature selection and its impact on model performance.</li>
        <li>
          Implementing various machine learning algorithms for classification
          tasks.
        </li>
        <li>Evaluating model performance using different metrics.</li>
        <li>Visualizing data and model results for better understanding.</li>
      </ul>
      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Citations
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        The dataset collected from the following works:
      </p>
      <ul className="list-disc pl-5 mb-5">
        <li>
          <a
            href="https://www.kaggle.com/datasets/thedevastator/cancer-patients-and-air-pollution-a-new-link"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Lung Cancer Dataset on Kaggle
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LungCancerPrediction;
