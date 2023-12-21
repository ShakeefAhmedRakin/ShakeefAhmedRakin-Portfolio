import AboutEducation from "../AboutEducation/AboutEducation";
import Banner from "../Banner/Banner";
import Experience from "../Experience/Experience";
import RecentProject from "../RecentProject/RecentProject";
import Skills from "../Skills/Skills";
import GetInTouch from "../GetInTouch/GetInTouch";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-10">
        <AboutEducation></AboutEducation>
      </div>
      <div className="mb-10">
        <Skills></Skills>
      </div>
      <div className="mb-10">
        <RecentProject></RecentProject>
      </div>
      <div className="mb-10">
        <Experience></Experience>
      </div>
      <div className="mb-10">
        <GetInTouch></GetInTouch>
      </div>
    </>
  );
};

export default Home;
