import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link to='/jobs' className="p-button p-button-rounded w-full justify-center border-orange-700 hover:border-orange-600 bg-orange-700 hover:bg-orange-600 text-2xl !text-white">
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
