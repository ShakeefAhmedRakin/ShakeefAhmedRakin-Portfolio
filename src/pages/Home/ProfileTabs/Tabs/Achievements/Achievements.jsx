const Achievements = () => {
  return (
    <div className="space-y-2">
      {/* GDSC CRCE BitNBuild'24 Hackathon */}
      <div
        className="collapse collapse-plus shadow rounded-xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xs md:text-base font-bold">
          Top 10 Finalists - GDSC CRCE BitNBuild’24 Hackathon
          <hr className="border-[#DF131C] border-[1px] w-1/4 mt-1" />
        </div>
        <div className="collapse-content">
          <h3 className="text-xs md:text-sm">
            Project: AgriBlockStorage - Logistics Management Platform For
            Farmers
          </h3>
          <h2 className="text-xs md:text-sm italic">February 2024</h2>
          <ul className="mt-2 text-[10px] md:text-xs list-disc ml-5">
            <li>
              Independently coded the project using the MERN stack for both
              front-end and back-end development.
            </li>
            <li>
              Implemented features and functionalities, collaborating closely
              with the team to ensure proper implementation of requirements.
            </li>
          </ul>
        </div>
      </div>

      {/* GDSC KITAHACK 2024 */}
      <div
        className="collapse collapse-plus shadow rounded-xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xs md:text-base font-bold">
          Participatory Certificate - GDSC KITAHACK 2024
          <hr className="border-[#0BAA8C] border-[1px] w-1/4 mt-1" />
        </div>
        <div className="collapse-content">
          <h2 className="text-xs md:text-sm italic">
            Project: ReWaste - Platform connects agricultural waste with energy
            producers sustainably
          </h2>
          <h2 className="text-xs md:text-sm italic">January 2024</h2>
          <ul className="mt-2 text-[10px] md:text-xs list-disc ml-5">
            <li>
              Collaborated with the team leader to brainstorm ideas, shaping
              project concepts and business models.
            </li>
            <li>
              Played an active role in designing visually appealing slides to
              convey project features.
            </li>
            <li>Participated in development using the MERN stack.</li>
          </ul>
        </div>
      </div>

      {/* DevHack 2023 */}
      <div
        className="collapse collapse-plus shadow rounded-xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xs md:text-base font-bold">
          Top 10 Finalists - DevHack 2023
          <hr className="border-[#6460BE] border-[1px] w-1/4 mt-1" />
        </div>
        <div className="collapse-content">
          <h2 className="text-xs md:text-sm italic">
            Project: BillsGo - All in One Utility Bill Payment & Collection App
          </h2>
          <h2 className="text-xs md:text-sm italic">December 2023</h2>
          <ul className="mt-2 text-[10px] md:text-xs list-disc ml-5">
            <li>
              Collaborated with the team leader to brainstorm ideas,
              contributing to the project's conceptualization.
            </li>
            <li>
              Involved in the development of business models and visualizations.
            </li>
            <li>
              Took an active role in designing engaging slides that effectively
              communicated the project's features.
            </li>
          </ul>
        </div>
      </div>

      {/* MyRapid Bus x UTM Data Hackathon 2023 */}
      <div
        className="collapse collapse-plus shadow rounded-xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xs md:text-base font-bold">
          2nd Place - MyRapid Bus x UTM Data Hackathon 2023
          <hr className="border-[#DF131C] border-[1px] w-1/4 mt-1" />
        </div>
        <div className="collapse-content">
          <h2 className="text-xs md:text-sm italic">
            Project: MaintainIQ - Smart Maintenance Management System with AI
          </h2>
          <h2 className="text-xs md:text-sm italic">September 2023</h2>
          <ul className="mt-2 text-[10px] md:text-xs list-disc ml-5">
            <li>
              Conducted comprehensive data preprocessing to ensure data quality
              and preparedness for analysis.
            </li>
            <li>
              Developed a predictive model utilizing bus sensor data to forecast
              engine health.
            </li>
            <li>
              Contributed to proactive maintenance strategies based on the
              analysis.
            </li>
          </ul>
        </div>
      </div>

      {/* InnoJam 2023 */}
      <div
        className="collapse collapse-plus shadow rounded-xl"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xs md:text-base font-bold">
          5th Place - InnoJam 2023: Design your Cyberjaya Smart Sustainable City
          <hr className="border-[#6460BE] border-[1px] w-1/4 mt-1" />
        </div>
        <div className="collapse-content">
          <h2 className="text-xs md:text-sm italic">
            Project: ReCycGo - B2B mobile app optimizing waste reduction through
            smart logistics
          </h2>
          <h2 className="text-xs md:text-sm italic">September 2023</h2>
          <ul className="mt-2 text-[10px] md:text-xs list-disc ml-5">
            <li>
              Collaborated with the team leader in ideation and
              conceptualization.
            </li>
            <li>Took a lead role in designing presentation slides.</li>
            <li>
              Effectively communicated the project's vision, features, and
              benefits during the competition.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
