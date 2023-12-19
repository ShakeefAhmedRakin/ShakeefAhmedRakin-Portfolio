import AboutEducation from "../AboutEducation/AboutEducation";
import Banner from "../Banner/Banner";
import RecentProject from "../RecentProject/RecentProject";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";

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
      <div className="mb-10 hidden">
        <Work></Work>
      </div>
    </>
  );
};

export default Home;
