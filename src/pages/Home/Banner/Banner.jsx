import { TypeAnimation } from "react-type-animation";
import { TbBrandGithub } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";

const Banner = () => {
  return (
    <>
      <div className="bg-primary py-24 md:py-36">
        <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-x-5 gap-y-10">
            <div className="text-background space-y-5 flex-1">
              <h1 className="font-heading tracking-[6px] font-thin text-2xl md:text-3xl lg:text-5xl flex flex-col gap-y-2">
                Hello!, I am<br></br>
                <span className="font-medium border-b-[1px] pb-2">
                  Shakeef Ahmed Rakin
                </span>
              </h1>
              <div className="font-text text-lg md:text-xl lg:text-2xl">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "Exploring the world of AI",
                    1000,
                    "Hackathon Geek",
                    1000,
                    "A University Student",
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div className="flex gap-8 flex-wrap">
                <a
                  href="https://github.com/ShakeefAhmedRakin"
                  target="blank"
                  className="font-text font-bold flex items-center gap-2 underline underline-offset-4"
                >
                  <TbBrandGithub className="text-2xl"></TbBrandGithub>GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shakeef-ahmed-rakin-269548242/"
                  target="blank"
                  className="font-text font-bold flex items-center gap-2 underline underline-offset-4"
                >
                  <CiLinkedin className="text-3xl"></CiLinkedin>LinkedIn
                </a>
              </div>
              <div className="flex gap-4 font-text">
                <button className="btn border-background bg-transparent text-background hover:text-primary hover:bg-background">
                  Get in touch
                </button>
                <button className="btn border-none bg-background text-primary">
                  Curriculum Vitae
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img src="/banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
