import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LiaUniversitySolid } from "react-icons/lia";
import { RiSchoolLine } from "react-icons/ri";

const AboutEducation = () => {
  return (
    <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 flex flex-col md:flex-row gap-x-5 gap-y-8">
      <div className="flex-1">
        <p className="text-secondary font-text text-sm">Introduction</p>
        <h1 className="font-heading font-bold text-lg md:text-xl lg:text-4xl tracking-[4px]">
          ABOUT
        </h1>
        <hr className="my-1" />
        <p className="font-text text-sm lg:text-base my-5">
          {
            "Nice to meet you. I'm someone who's enthusiastic about coding and crafting digital experiences, I find my passion in the lines of code that bring ideas to life. When I'm not immersed in development projects, you'll likely find me with headphones on, exploring new music genres to inspire my work. PC gaming is another love, where I indulge in both interactive and competitive worlds that often fuel my creative approach to problem-solving. Welcome to my corner of code and creativity!"
          }
        </p>
        <p className="font-text text-sm lg:text-base my-5">
          {
            "Nice to meet you. I'm someone who's enthusiastic about coding and crafting digital experiences, I find my passion in the lines of code that bring ideas to life. When I'm not immersed in development projects, you'll likely find me with headphones on, exploring new music genres to inspire my work. PC gaming is another love, where I indulge in both interactive and competitive worlds that often fuel my creative approach to problem-solving. Welcome to my corner of code and creativity!"
          }
        </p>
      </div>
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
