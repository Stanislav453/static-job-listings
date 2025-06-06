import React from "react";
import type { FilterJobsDataType } from "../type";
type FilterJobsType = {
  filterJobsData: string[];
  setFilterJobsData: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterJobs = ({ setFilterJobsData, filterJobsData }: FilterJobsType) => {
  // const getKey = (key:number) =>
  // {
  //   return key

  // }

  const removeJob = (key: string) => {
    setFilterJobsData((prev: string[]) =>
      prev.filter((job) => job != key)
    );
  };

  return (
    <div className="absolute bottom-[-1.3rem] container mx-10">
      <div className="flex justify-between mx-5 bg-list-item py-3 px-5">
        <ul className="flex gap-2">
          <li className="flex justify-center items-center">
            <span className=" px-3 text-main-font font-semibold rounded-tl-sm rounded-bl-sm bg-body-bg-color ">
              Javascript
            </span>
            <button className="px-2  text-white bg-main-font rounded-br-sm rounded-tr-sm hover:bg-features transition ease-in-out duration-300">
              x
            </button>
          </li>
          {filterJobsData.map((job, index) => {
            return (
              <li key={index} className="flex justify-center items-center">
                <span className=" px-3 text-main-font font-semibold rounded-tl-sm rounded-bl-sm bg-body-bg-color ">
                  {job}
                </span>
                <button
                  onClick={() => removeJob(job)}
                  className="px-2  text-white bg-main-font rounded-br-sm rounded-tr-sm hover:bg-features transition ease-in-out duration-300"
                >
                  x
                </button>
              </li>
            );
          })}
          {/* <li className="flex justify-center items-center" >
            <span className=" px-3 text-main-font font-semibold rounded-tl-sm rounded-bl-sm bg-body-bg-color ">Javascript</span>
            <button className="px-2  text-white bg-main-font rounded-br-sm rounded-tr-sm hover:bg-features transition ease-in-out duration-300">x</button>
          </li>
          <li className="flex justify-center items-center" >
            <span className=" px-3 text-main-font font-semibold rounded-tl-sm rounded-bl-sm bg-body-bg-color ">Javascript</span>
            <button className="px-2  text-white bg-main-font rounded-br-sm rounded-tr-sm hover:bg-features transition ease-in-out duration-300">x</button>
          </li>
          <li className="flex justify-center items-center" >
            <span className=" px-3 text-main-font font-semibold rounded-tl-sm rounded-bl-sm bg-body-bg-color ">Javascript</span>
            <button className="px-2  text-white bg-main-font rounded-br-sm rounded-tr-sm hover:bg-features transition ease-in-out duration-300">x</button>
          </li> */}
        </ul>
        <button className="text-main-font hover:underline">Clear</button>
      </div>
    </div>
  );
};

export default FilterJobs;
