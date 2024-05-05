"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { InView } from "react-intersection-observer";

const experience = [
  {
    skill: "HTML",
    percentage: 96,
  },
  {
    skill: "CSS",
    percentage: 85,
  },
  {
    skill: "JavaScript",
    percentage: 90,
  },
  {
    skill: "React",
    percentage: 94,
  },
  {
    skill: "Next",
    percentage: 80,
  },
  {
    skill: "Python",
    percentage: 95,
  },
  {
    skill: "Django",
    percentage: 92,
  },
  {
    skill: "Tailwind CSS",
    percentage: 97,
  },
  {
    skill: "Material UI",
    percentage: 89,
  },
];

const Experience = () => {
  return (
    <div className="p-10" id="experience">
      <h1 className="text-center font-bold text-gray-300 text-4xl pt-6 pb-6">
        Experience With
      </h1>
      <div className="flex flex-wrap gap-[3rem] items-center justify-center">
        {experience.map((skill) => {
          return (
            <InView>
              {({ inView, ref }) => {
                return (
                  <div
                    ref={ref}
                    className="mt-5 h-[200px] w-[200px] text-center"
                  >
                    <CircularProgressbarWithChildren
                      value={inView ? skill.percentage : 0}
                      styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: "round",
                        textSize: "16px",
                        pathTransitionDuration: 2,
                        pathColor: `rgba(30,144,255, ${
                          inView ? skill.percentage : 0 / 100
                        })`,
                        trailColor: "white",
                      })}
                    >
                      <p className="text-white text-2xl">{skill.skill}</p>
                    </CircularProgressbarWithChildren>
                  </div>
                );
              }}
            </InView>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
