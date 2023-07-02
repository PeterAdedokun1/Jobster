import React from "react";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import JobInfo from "./JobInfo";
const JobContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  console.log(jobs)
  return (
    <Wrapper>
      <h5>Jobs Info</h5>
      <div className="jobs">
        {jobs.map((job) => (
          <Job {...job} key={job._id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default JobContainer;
