const OffensiveTweetClassifier = () => {
  return (
    <div
      className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28"
      data-aos="fade-up"
    >
      <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[2px] mb-5">
        Offensive Tweet Detection and Categorization
      </h1>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        This project focuses on building a machine learning model to classify
        tweets as offensive or non-offensive and categorize offensive tweets
        into specific types. The goal is to create a model that can identify
        offensive content on social media platforms and categorize it.
      </p>
      <p className="font-text text-sm lg:text-base">
        Developed for the <strong>Natural Language Processing (CSE440)</strong>{" "}
        course at <strong>BRAC University</strong>.
      </p>
      <p className="font-text text-sm lg:text-base mt-4 mb-5">
        Check out the project on my{" "}
        <a
          href="https://github.com/ShakeefAhmedRakin/Offensive-Tweet-Classifier"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          GitHub Repository
        </a>
        .
      </p>

      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Dataset
      </h2>
      <hr className="mb-5" />
      <h3 className="font-text font-bold text-sm md:text-lg mb-2">
        Offensive Language Identification Dataset (OLID)
      </h3>
      <p className="font-text text-sm lg:text-base mb-5">
        <em>v 1.0: March 15 2018</em>
        <br />
        <a
          href="https://scholar.harvard.edu/malmasi/olid"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Dataset Link
        </a>
      </p>
      <p className="font-text mb-5">
        Levels <strong>A</strong> and <strong>B</strong> were my goals for this
        project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h4 className="font-heading font-semibold text-sm md:text-lg mb-1">
            Offensive language identification (LEVEL A)
          </h4>
          <ul className="list-disc pl-5 mb-5">
            <li>
              (NOT) Not Offensive - This post does not contain offense or
              profanity.
            </li>
            <li>
              (OFF) Offensive - This post contains offensive language or a
              targeted (veiled or direct) offense
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm md:text-lg mb-1">
            Automatic categorization of offense types (LEVEL B)
          </h4>
          <ul className="list-disc pl-5 mb-5">
            <li>(TIN) Targeted Insult and Threats</li>
            <li>
              (UNT) Untargeted - A post containing non-targeted profanity and
              swearing.
            </li>
            <li>(NULL) - For non-offensive posts.</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="font-heading font-semibold text-sm md:text-lg mb-1">
          Offense target identification (LEVEL C)
        </h4>
        <ul className="list-disc pl-5 mb-5">
          <li>
            (IND) Individual - The target of the offensive post is an
            individual.
          </li>
          <li>
            (GRP) Group - The target of the offensive post is a group of people.
          </li>
          <li>
            (OTH) Other – The target of the offensive post does not belong to
            any of the previous categories.
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading font-semibold text-sm md:text-lg mb-1">
          Here are the possible label combinations in the dataset
        </h4>
        <ul className="list-disc pl-5 mb-5">
          <li>NOT NULL</li>
          <li>OFF UNT</li>
          <li>OFF TIN</li>
        </ul>
      </div>
      <p className="font-text mb-5 italic">THE DATASET IS CITED BELOW</p>

      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Preprocessing
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        The text data is preprocessed using the following steps:
      </p>
      <ul className="list-disc pl-5 mb-5">
        <li>Column Removal: Dropped the 'id' column from the dataset.</li>
        <li>
          Missing Value Handling: Filled NULL values in the{" "}
          <code className="bg-gray-200 rounded px-1">category</code> column with
          a default value{" "}
          <code className="bg-gray-200 rounded px-1">'NULL'</code> and removed
          rows with missing values in the{" "}
          <code className="bg-gray-200 rounded px-1">tweet</code> column.
        </li>
        <li>Lowercasing: Converted all text to lowercase.</li>
        <li>Mention Removal: Removed "@user" mentions from the text.</li>
        <li>
          Symbol Removal: Removed non-alphanumeric characters and symbols.
        </li>
        <li>
          Tokenization: Tokenized the text into words using NLTK's{" "}
          <code className="bg-gray-200 rounded px-1">word_tokenize()</code>{" "}
          function.
        </li>
        <li>
          Lemmatization: Performed lemmatization on the tokens using NLTK's
          WordNetLemmatizer.
        </li>
        <li>
          Convert preprocessed text into TF-IDF features using the trained
          TF-IDF vectorizer.
        </li>
        <li>
          Vectorized the data using{" "}
          <code className="bg-gray-200 rounded px-1">TF-IDF</code> using{" "}
          <code className="bg-gray-200 rounded px-1">TfidfVectorizer</code> from{" "}
          <code className="bg-gray-200 rounded px-1">sklearn</code>.
        </li>
      </ul>

      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Model Training
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        Two instances of the logistic regression model are used for training the
        offensive detection and category detection.
      </p>
      <h3 className="font-heading font-semibold text-md lg:text-lg mb-2">
        Model: Logistic Regression
      </h3>
      <p className="font-text text-sm lg:text-base mb-5">
        Parameters:{" "}
        <code className="bg-gray-200 rounded px-1">max_iter=1000</code> This
        parameter ensures that the optimization algorithm has enough iterations
        to find a solution.
      </p>

      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Model Evaluation
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        The trained models are evaluated using classification reports and
        confusion matrices to measure their performance on test data. The
        classification report provides precision, recall, and F1-score for
        different classes. The confusion matrix gives insight into the true
        positives, true negatives, false positives, and false negatives.
      </p>
      <img
        src="https://github.com/ShakeefAhmedRakin/Offensive-Tweet-Classifier/assets/112527326/b52a9ee0-5e69-4315-bfaf-ef43007d3e56"
        alt="Model Evaluation"
        className="w-auto mx-auto h-auto rounded-md mb-5"
        //
      />

      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Usage
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        To use the model, input a tweet, and the model will classify it as
        offensive or non-offensive and provide the offense type if applicable.
      </p>

      <h2 className="font-heading font-bold text-lg md:text-xl lg:text-3xl tracking-[2px] mb-3">
        Dataset Citation
      </h2>
      <hr className="mb-5" />
      <p className="font-text text-sm lg:text-base mb-5">
        Zampieri, M., Malmasi, S., Nakov, P., Rosenthal, S., Farra, N., & Kumar,
        R. (2019). Predicting the Type and Target of Offensive Posts in Social
        Media. In Proceedings of NAACL.
      </p>
      <p className="font-text text-sm lg:text-base mb-5">
        Zampieri, M., Malmasi, S., Nakov, P., Rosenthal, S., Farra, N., & Kumar,
        R. (2019). SemEval-2019 Task 6: Identifying and Categorizing Offensive
        Language in Social Media (OffensEval). In Proceedings of The 13th
        International Workshop on Semantic Evaluation (SemEval).
      </p>
    </div>
  );
};

export default OffensiveTweetClassifier;
