import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { JobInterface } from "../interfaces";
import { getJobs } from "../jobStore";

interface JobListingProps {
  isHome: boolean;
}

const JobListing = ({ isHome }: JobListingProps) => {
  const [jobs, setJobs] = useState<JobInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs(isHome, setJobs, setLoading);
  }, []);

  return (
    <section
      className={`flex grow bg-amber-50 min-[425px]:px-10 px-5 ${
        isHome ? "pt-5 pb-12" : "py-12"
      }`}
    >
      <div className="2xl:container mx-auto">
        <h2 className="text-4xl font-bold text-orange-600 mb-10 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <i className="pi pi-spin pi-spinner text-orange-500 before::text-4xl text-4xl"></i>
          </div>
        ) : (
          <>
            {jobs && jobs.length ? (
              <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {jobs.map((job) => (
                  <JobCard job={job} key={job.id} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <p>An error occurred. Could not fetch jobs.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default JobListing;
