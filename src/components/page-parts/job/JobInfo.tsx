import { JobInterface } from "../../../interfaces";
import Salary from "../../Salary";

interface JobInfoProps {
  job: JobInterface;
}

const JobInfo = ({ job }: JobInfoProps) => {
  return (
    <main className="xl:col-span-7 lg:col-span-6 md:col-span-5 col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-yellow-600">{job.type}</div>
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <p className="!text-red-600">
          <i className="pi pi-map-marker me-2 !text-red-600 !before:text-red-600"></i>
          {job.location}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold">Job Description</h3>

        <p className="mb-10">{job.description}</p>

        <h3 className="text-xl font-bold">Salary</h3>

        <Salary salary={job.salary} pClass="text-orange-500" />
      </div>
    </main>
  );
};

export default JobInfo;
