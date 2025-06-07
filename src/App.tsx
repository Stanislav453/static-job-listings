import { useState } from "react";
import Header from "./components/Header";
import JobsList from "./components/JobsList";
import jobs from "./data/data.json";
import FilterJobs from "./components/FilterJobs.tsx";

function App() {
  const [filterJobsData, setFilterJobsData] = useState<string[]>([]);

  const filterList = jobs.filter((job) => {
    const allTags = [...job.languages, ...job.tools, job.level];
    return filterJobsData.every((filter) => allTags.includes(filter));
  });

  return (
    <>
      <Header>
        {filterJobsData.length != 0 && (
          <FilterJobs
            setFilterJobsData={setFilterJobsData}
            filterJobsData={filterJobsData}
          />
        )}
      </Header>
      <JobsList setFilterJobsData={setFilterJobsData} jobsList={filterList} />
    </>
  );
}

export default App;
