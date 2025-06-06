import React from "react";
import FilterJobs from "./FilterJobs.tsx";
import type { FilterJobsDataType } from "../type.ts";

type HeaderProps = {
  filterJobsData: string[];
  setFilterJobsData: React.Dispatch<React.SetStateAction<string[]>>;
};

const Header = ({ setFilterJobsData, filterJobsData }: HeaderProps) => {
  return (
    <header className="  flex justify-center	 relative h-36 bg-header-mobile sm:bg-header-desktop bg-header-bg-color">
      <FilterJobs
        setFilterJobsData={setFilterJobsData}
        filterJobsData={filterJobsData}
      />
    </header>
  );
};

export default Header;
