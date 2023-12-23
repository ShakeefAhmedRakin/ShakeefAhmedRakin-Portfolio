import { Chrono } from "react-chrono";
import { FaExternalLinkAlt } from "react-icons/fa";

const items = [
  {
    title: "September 2023",
  },
  {
    title: "September 2023",
  },
];

const customContent = [
  <>
    {/* SEPTEMBER 23 */}
    <div className="font-text">
      <div className="max-w-2xl w-full">
        <h3 className="font-bold text-sm text-background bg-primary py-1 px-2 rounded-xl shadow-xl mb-3">
          2nd Place - MyRapid Bus x UTM Data Hackathon 2023
        </h3>
        <h4 className="font-medium mb-1 text-sm">
          UTM, PRASARANA MALAYSIA BERHAD
        </h4>
        <p className="mb-1 text-sm">
          {
            "Our project aimed at predictive bus maintenance and inventory management, leveraging AI. MMy contribution involved utilizing Python to preprocess data, ensuring its quality and readiness for analysis. Additionally, I crafted informative data visualizations to aid decision-making and developed a predictive model for predicting bus breakdown using bus sensors"
          }
        </p>
        <div className="mt-4 flex flex-wrap gap-4 justify-end">
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7114581037468286977/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-text font-bold flex items-center gap-2 underline underline-offset-4 mb-6 text-xs md:text-base"
          >
            <FaExternalLinkAlt className="text-2xl"></FaExternalLinkAlt>
            Link
          </a>
        </div>
      </div>
    </div>
  </>,
  <>
    {/* SEPTEMBER 23 */}
    <div className="font-text">
      <div className="max-w-2xl w-full">
        <h3 className="font-bold text-sm text-background bg-primary py-1 px-2 rounded-xl shadow-xl mb-3">
          5th Place - InnoJam 2023: Design your Cyberjaya Smart Sustainable City
        </h3>
        <h4 className="font-medium mb-1 text-sm">InnoJam</h4>
        <p className="mb-1 text-sm">
          {
            "Our project zeroed in on a crucial issue— Help Malaysia in achieving their ideal Recycling Rate of 40% by 2025. Our solution? A mobile application geared towards businesses (B2B) to optimize waste management through smart logistics."
          }
        </p>
        <div className="mt-4 flex flex-wrap gap-4 justify-end">
          <a
            href="https://www.eventbrite.com/e/innojam-design-your-cyberjaya-smart-sustainable-city-tickets-708634694447"
            target="_blank"
            rel="noopener noreferrer"
            className="font-text font-bold flex items-center gap-2 underline underline-offset-4 mb-6 text-xs md:text-base"
          >
            <FaExternalLinkAlt className="text-2xl"></FaExternalLinkAlt>
            Link
          </a>
        </div>
      </div>
    </div>
  </>,
];

const ExperienceTimeline = () => {
  return (
    <>
      <div className="">
        <Chrono
          items={items}
          mode="HORIZONTAL"
          itemWidth={150}
          theme={{
            primary: "#1A1A1C",
            secondary: "#1A1A1C",
            cardTitleColor: "#1A1A1C",
            cardBgColor: "#f9fafb",
            cardForeColor: "violet",
            titleColor: "#1A1A1C",
            titleColorActive: "#f9fafb",
          }}
        >
          {customContent}
        </Chrono>
      </div>
    </>
  );
};

export default ExperienceTimeline;
