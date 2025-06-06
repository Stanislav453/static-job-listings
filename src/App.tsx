import { useState } from "react";
import Header from "./components/Header";
import JobsList from "./components/JobsList";
import jobs from "./data/data.json";
import type { FilterJobsDataType } from "./type";

function App() {
  const [jobsListData, setJobsListData] = useState(jobs);
  const [ filterJobsData, setFilterJobsData ] = useState<string[]>([]);


  // const uniqueJobs = Array.from(new Set(filterJobsData));

  // console.log(jobsListData);
  // console.log("This is uni",uniqueJobs);
  console.log("Co to je",filterJobsData);
  

  return (
    <>
      <Header setFilterJobsData={setFilterJobsData} filterJobsData={filterJobsData}  />
      <JobsList  setFilterJobsData={setFilterJobsData} jobsList={jobsListData} />
    </>
  );
}

export default App;
