import React from "react";
import type { FilterJobsDataType, JobDataType } from "../type";
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
      <ul className=" flex flex-col gap-4 mx-5">
        {jobsList.map((job, index) => {
          const {
            id,
            company,
            contract,
            featured,
            languages,
            level,
            location,
            logo,
            position,
            postedAt,
            role,
            tools,
          } = job;
          return (
            <li
              key={index}
              className="w-full flex flex-col gap-12 sm:flex-row justify-between p-3 sm:p-6 bg-list-item"
            >
              <div className="flex">
                <div>
                  <img src={logo} alt={company} />
                </div>
                <div className="flex flex-col ml-5 justify-center">
                  <div className="flex gap-3 items-center	">
                    <h3 className="text-main-font font-semibold">{company}</h3>{" "}
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
                  <h2 className="font-bold">{position}</h2>
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
              <ul className="flex gap-2 items-center border-t border-black py-5 sm:p-0 sm:border-none">
                {tools.map((tool, index) => {
                  return (
                    <li key={index}>
                      <button
                        onClick={() =>
                          setList(tool)
                        }
                        className=" py-1 px-3 text-main-font font-semibold rounded-lg bg-body-bg-color "
                      >
                        {tool}
                      </button>
                    </li>
                  );
                })}
                <li></li>
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default JobsList;
