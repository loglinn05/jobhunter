import { useLoaderData } from "react-router-dom";
import GoBack from "../components/page-parts/job/GoBack";
import JobInfo from "../components/page-parts/job/JobInfo";
import CompanyInfo from "../components/page-parts/job/CompanyInfo";
import ManageJob from "../components/page-parts/job/ManageJob";
import { JobInterface } from "../interfaces";

interface JobProps {
  deleteJob: (id: string) => void;
}

const Job = ({ deleteJob }: JobProps) => {
  const job = useLoaderData() as JobInterface;

  return (
    <>
      {job && job.id ? (
        <>
          <GoBack />
          <section className="bg-gray-50">
            <div className="2xl:container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                <JobInfo job={job} />
                <aside className="xl:col-span-3 lg:col-span-4 md:col-span-5 col-span-1">
                  <CompanyInfo company={job.company} />
                  <ManageJob jobId={job.id} deleteJobFunction={deleteJob} />
                </aside>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <p>An error occurred. Could not fetch a job.</p>
        </div>
      )}
    </>
  );
};

export default Job;
