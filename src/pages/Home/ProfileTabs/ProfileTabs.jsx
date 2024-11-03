import { useState, useEffect, useRef, useMemo } from "react";
import {
  FaCogs,
  FaUniversity,
  FaProjectDiagram,
  FaAward,
} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { IoIosBookmarks } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import Education from "./Tabs/Education/Education";
import Achievements from "./Tabs/Achievements/Achievements";
import RecentProjects from "./Tabs/RecentProjects/RecentProjects";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const [isOverflowing, setIsOverflowing] = useState(false);
  const tabsContainerRef = useRef(null);

  const tabs = useMemo(
    () => [
      ["Skills", <FaCogs key="Skills" />],
      ["Experience", <BsPersonLinesFill key="Experience" />],
      ["Education", <FaUniversity key="Education" />],
      ["Projects", <FaProjectDiagram key="Projects" />],
      ["Achievements", <FaAward key="Achievements" />],
      ["Publications", <IoIosBookmarks key="Publications" />],
    ],
    []
  );

  useEffect(() => {
    const container = tabsContainerRef.current;
    setIsOverflowing(container.scrollWidth > container.clientWidth);
  }, [tabs]);

  return (
    <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 relative">
      {/* TITLE */}
      <h1
        data-aos="fade-down"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-head"
      >
        Career<span className="text-primary">.</span>
      </h1>
      <div className="w-12 p-0.5 bg-primary mt-2" data-aos="fade-down"></div>

      {/* THE TABS SELECTION MENU */}
      <div className="mb-10 relative">
        <ul
          ref={tabsContainerRef}
          className="flex justify-around gap-3 mt-5 overflow-x-auto bg-gray-50 tabs-container overflow-y-hidden"
          data-aos="fade-up"
        >
          {tabs.map((tab, index) => (
            <li
              key={tab[0]}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <button
                className={`capitalize duration-500 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 text-xs md:text-lg p-2 md:p-4 ${
                  activeTab === tab[0]
                    ? "text-primary border-primary"
                    : "text-text border-transparent hover:border-gray-300"
                } font-semibold`}
                onClick={() => setActiveTab(tab[0])}
              >
                <span className="flex gap-3 items-center">
                  <span className="text-sm md:text-base">{tab[1]}</span>
                  {tab[0]}
                </span>
              </button>
            </li>
          ))}
        </ul>
        {isOverflowing && (
          <div className="absolute -top-6 right-0">
            <FaLongArrowAltRight className="text-gray-400 text-2xl animate-pulse" />
          </div>
        )}
      </div>

      {/* THE TAB CONTENTS */}
      <div className="min-h-[500px]">
        {activeTab === "Education" && <Education></Education>}
        {activeTab === "Projects" && <RecentProjects></RecentProjects>}
        {activeTab === "Achievements" && <Achievements></Achievements>}
        {activeTab === "Publications" && <h1>Publications Content</h1>}
      </div>
    </div>
  );
};

export default ProfileTabs;
