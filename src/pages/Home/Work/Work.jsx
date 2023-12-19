const Work = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
        <p className="text-secondary text-center font-text text-sm">
          WHAT I DID
        </p>
        <h1 className="text-primary text-center font-heading font-bold text-2xl lg:text-5xl tracking-[4px]">
          EXPERIENCE
        </h1>
        {/* TIMELINE */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-4">
          {/* LEFT */}
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">September 2023</time>
              <div className="text-lg font-bold font-text">
                2nd Place - MyRapid Bus x UTM Data Hackathon 2023
              </div>
              <p className="font-text">
                {
                  "Our project aimed at predictive bus maintenance and inventory management, leveraging AI. My role was preprocessing bus sensor data, crafting visualizations, and building a predictive AI model for predicting engine health"
                }
              </p>
            </div>
            <hr />
          </li>
          {/* RIGHT */}
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">October 2023</time>
              <div className="text-lg font-text font-bold">
                5th Place - InnoJam 2023
              </div>
              <p className="font-text">
                {
                  "Our project, ReCycgo, addresses Malaysia's aim for a 40% recycling rate by 2025 through a B2B mobile app integrating smart dustbins and logistics. It aims to optimize waste management, providing real-time updates for drivers, reducing costs, an improving environmental sustainability."
                }
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Work;
