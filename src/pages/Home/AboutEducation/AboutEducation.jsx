import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LiaUniversitySolid } from "react-icons/lia";
import { RiSchoolLine } from "react-icons/ri";
import { SlSocialSpotify } from "react-icons/sl";

const AboutEducation = () => {
  return (
    <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 flex flex-col md:flex-row gap-x-5 gap-y-8">
      {/* ABOUT ME */}
      <div className="flex-1">
        <p className="text-secondary font-text text-sm">Introduction</p>
        <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[4px]">
          ABOUT ME
        </h1>
        <hr className="mt-1 mb-5" />
        {/* ABOUT DESC */}
        <div>
          <p className="font-text text-sm lg:text-base mb-5">
            {
              "Nice to meet you. I'm Rakin! Enthusiastic about coding and crafting digital experiences, I find my passion in the lines of code that bring ideas to life. When I'm not immersed in development projects, you'll likely find me with headphones on, exploring new music genres to inspire my work or binging anime shows. Also, I love gaming as it has always been an integral part of my life. It's where I indulge in both interactive and competitive worlds that often fuel my creative approach to problem-solving. Welcome to my corner of code and creativity!"
            }
          </p>
          <p className="font-text text-sm lg:text-base mb-5">
            Being an{" "}
            <a
              href="https://www.16personalities.com/infj-personality"
              className="link font-bold"
              target="blank"
            >
              INFJ
            </a>
            , my strength lies in my resolute determination to confront
            challenges head-on, fostering the development of robust
            problem-solving and analytical skills. I am deeply committed to
            seeing projects through to their proper completion, sometimes being
            too much of a perfectionist.
          </p>
        </div>
        {/* INTERESTS */}
        <div className="mb-5">
          <h1 className="font-heading font-bold text-lg md:text-xl lg:text-2xl tracking-[1px]">
            My Interests
          </h1>
          <hr className="my-1 mb-3" />
          <div className="flex flex-wrap gap-1">
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-primary border-primary font-medium p-2">
              Gaming
            </div>
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-primary border-primary font-medium p-2">
              Anime
            </div>
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-primary border-primary font-medium p-2">
              Coding
            </div>
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-primary border-primary font-medium p-2">
              Music
            </div>
          </div>
        </div>
        {/* MUSIC */}
        <div>
          <h1 className="font-heading font-bold text-lg md:text-xl lg:text-2xl tracking-[1px]">
            My Music Taste
          </h1>
          <hr className="my-1 mb-3" />
          <div className="flex flex-wrap gap-1 mb-3 max-w-xs">
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-background border-primary bg-primary font-medium p-2">
              Retro
            </div>
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-background border-primary bg-primary font-medium p-2">
              JPOP
            </div>
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-background border-primary bg-primary font-medium p-2">
              Synthwave
            </div>
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-background border-primary bg-primary font-medium p-2">
              Breakcore
            </div>
            <div className="badge badge-xs md:badge-md md:p-3 font-text text-background border-primary bg-primary font-medium p-2">
              EDM
            </div>
          </div>
          <p className="font-text text-sm lg:text-base mb-3">
            {
              "I believe exploring a person's taste in music reveals a lot about them."
            }
          </p>
          <div className="flex items-center gap-2 font-text text-sm lg:text-base">
            Explore my favorite tunes.
            <a
              href="https://open.spotify.com/user/b4k23tz8wq4lhrgv4jlc3lp2h?si=a7557d2abe3240dd"
              target="blank"
              className="font-text font-bold flex items-center gap-2 underline underline-offset-4"
            >
              <SlSocialSpotify className="text-2xl"></SlSocialSpotify>
              Spotify
            </a>
          </div>
        </div>
      </div>
      {/* EDUCATION */}
      <div className="flex-1">
        <p className="text-left lg:text-right text-secondary font-text text-sm">
          Background
        </p>
        <h1 className="text-left lg:text-right font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[4px]">
          EDUCATION
        </h1>
        <hr className="my-1" />
        <div className="mt-5">
          <VerticalTimeline lineColor="#1a1a1c">
            {/* UNIVERSITY */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#1a1a1c", color: "#1a1a1c" }}
              dateClassName="ml-4 font-text"
              contentArrowStyle={{ borderRight: "7px solid #1a1a1c" }}
              date="May 2020 - present"
              iconStyle={{ background: "#1a1a1c", color: "#fff" }}
              icon={<LiaUniversitySolid />}
            >
              <div className="text-white font-heading tracking-[1px]">
                <h3 className="vertical-timeline-element-title font-medium">
                  Bachelor of Science<br></br>
                  Computer Science & Eng.
                </h3>
                <h4 className="vertical-timeline-element-subtitle ">
                  BRAC University
                </h4>
                <hr className="opacity-50" />
                <p>12th Semester</p>
              </div>
            </VerticalTimelineElement>
            {/* A LEVELS */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#1a1a1c", color: "#1a1a1c" }}
              dateClassName="mr-4 font-text"
              contentArrowStyle={{ borderRight: "7px solid #1a1a1c" }}
              date="May 2018 – Oct 2019"
              iconStyle={{ background: "#1a1a1c", color: "#fff" }}
              icon={<RiSchoolLine />}
            >
              <div className="text-white font-heading tracking-[1px]">
                <h3 className="vertical-timeline-element-title font-medium whitespace-nowrap">
                  GCE A Level
                </h3>
                <h4 className="vertical-timeline-element-subtitle ">
                  Cambridge
                </h4>
                <hr className="opacity-50" />
                <p>Mathematics | Chemistry | Physics</p>
              </div>
            </VerticalTimelineElement>
            {/* O LEVELS */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#1a1a1c", color: "#1a1a1c" }}
              dateClassName="ml-4 font-text"
              contentArrowStyle={{ borderRight: "7px solid #1a1a1c" }}
              date="May 2016 – Oct 2016"
              iconStyle={{ background: "#1a1a1c", color: "#fff" }}
              icon={<RiSchoolLine />}
            >
              <div className="text-white font-heading tracking-[1px]">
                <h3 className="vertical-timeline-element-title font-medium whitespace-nowrap">
                  GCE O Level
                </h3>
                <h4 className="vertical-timeline-element-subtitle ">
                  Cambridge
                </h4>
                <hr className="opacity-50" />
                <p>
                  {
                    "Mathematics | Add'l. Mathematics | Chemistry | Physics | English Language"
                  }
                </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default AboutEducation;
