import React from "react";
import type { JobDataType } from "../type";
import dotSVG from "../../public/images/dot.svg";

type JobsListType = {
  jobsList: JobDataType[];
  setFilterJobsData: React.Dispatch<React.SetStateAction<string[]>>;
};

const JobsList = ({ setFilterJobsData, jobsList }: JobsListType) => {
  const setList = (value: string) => {
    setFilterJobsData((job) => {
      if (!job.includes(value)) return [...job, value];
      return job;
    });
  };

  return (
    <main className="container mx-auto mt-10 sm:mt-20">
      <ul className=" flex flex-col gap-8 md:gap-4 mx-5">
        {jobsList.map((job, index) => {
          const {
            company,
            contract,
            featured,
            location,
            languages,
            level,
            logo,
            position,
            postedAt,
            tools,
          } = job;

          const jobSections = [level, ...languages, ...tools];

          return (
            <li
              key={index}
              className={`relative w-full flex flex-col gap-5 md:gap-12 md:flex-row justify-between pt-8  p-3 md:p-6 bg-list-item rounded-lg shadow-boxList ${
                featured && "border-main-font border-l-4"
              }`}
            >
              <div className="flex">
                <div className=" absolute top-[-20px] md:relative md:top-0 w-[40px] md:w-[90px] " >
                  <img src={logo} alt={company} />
                </div>
                <div className="flex flex-col ml-5 justify-center">
                  <div className="flex gap-3 items-center	">
                    <h3 className="text-main-font font-semibold">{company}</h3>
                    {job.new && (
                      <span className=" text-second-font font-semibold text-xs py-1 px-2 rounded-full bg-main-font">
                        NEW!
                      </span>
                    )}
                    {featured && (
                      <span className=" text-second-font font-semibold text-xs py-1 px-2 rounded-full bg-features">
                        FEATURE
                      </span>
                    )}
                  </div>
                  <a
                    href="#"
                    className="font-bold hover:text-main-font transition ease-in-out duration-300 "
                  >
                    {position}
                  </a>
                  <ul className="flex gap-2 text-sm text-third-font">
                    <li>{postedAt}</li>
                    <span className="flex">
                      <img className="object-contain" src={dotSVG} alt="dot" />
                    </span>
                    <li>{contract}</li>
                    <span className="flex">
                      <img className="object-contain" src={dotSVG} alt="dot" />
                    </span>
                    <li>{location}</li>
                  </ul>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 items-center border-t border-black py-5 md:p-0 md:border-none">
                {jobSections.map((job, index) => {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => setList(job)}
                        className=" py-1 px-3 text-main-font font-semibold rounded-lg bg-body-bg-color hover:text-second-font hover:bg-main-font transition ease-in-out duration-300"
                      >
                        {job}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default JobsList;
