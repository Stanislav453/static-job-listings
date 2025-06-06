import { useState } from "react";
import Header from "./components/Header";
import JobsList from "./components/JobsList";
import jobs from "./data/data.json";
import FilterJobs from "./components/FilterJobs.tsx";

function App() {
  
  const [filterJobsData, setFilterJobsData] = useState<string[]>([]);

  return (
    <>
      <Header>
        <FilterJobs
          setFilterJobsData={setFilterJobsData}
          filterJobsData={filterJobsData}
        />
      </Header>
      <JobsList setFilterJobsData={setFilterJobsData} jobsList={jobs} />
    </>
  );
}

export default App;
