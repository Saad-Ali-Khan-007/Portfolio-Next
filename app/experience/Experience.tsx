"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { InView } from "react-intersection-observer";
const Experience = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-gray-300 text-xl pt-6 pb-6">
        Experience With
      </h1>
      <InView>
        {({ inView, ref }) => {
          return (
            <div className="flex flex-wrap gap-[3rem] ">
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 98 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 98 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">HTML</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 85 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 85 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">CSS</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 90 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 90 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">JavaScript</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 90 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 90 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">React</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 88 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 88 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">Next</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 95 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 95 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">Django</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 95 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 95 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">Python</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 92 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 92 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">Tailwind Css</p>
                </CircularProgressbarWithChildren>
              </div>
              <div ref={ref} className="mt-5 h-[200px] w-[200px] text-center">
                <CircularProgressbarWithChildren
                  value={inView ? 95 : 0}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 2,
                    pathColor: `rgba(30,144,255, ${inView ? 95 : 0 / 100})`,
                    trailColor: "white",
                  })}
                >
                  <p className="text-white text-2xl">Material UI</p>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          );
        }}
      </InView>
    </div>
  );
};

export default Experience;
