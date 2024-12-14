import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <section>
      <div className="container m-auto py-6 px-6">
        <Link to="/jobs" className="flex items-center">
          <i className="pi pi-arrow-left mr-4"></i> Back to Job Listings
        </Link>
      </div>
    </section>
  );
};

export default GoBack;
