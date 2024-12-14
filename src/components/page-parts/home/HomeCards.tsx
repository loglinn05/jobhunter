import { Button } from "primereact/button";
import MyCard from "../../MyCard";
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
  const navigate = useNavigate();

  const btnpt = {
    label: {
      className: "!text-white",
    },
  };

  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <MyCard title="For Specialists">
            <p className="mt-0 mb-5">
              Browse our jobs and start your career today
            </p>
            <Button
              rounded
              label="Browse Jobs"
              className="w-fit border-orange-700 hover:border-orange-600 bg-orange-700 hover:bg-orange-600"
              pt={btnpt}
              onClick={() => navigate("/jobs")}
            />
          </MyCard>
          <MyCard title="For Employers" bgColor="bg-orange-100">
            <p className="mt-0 mb-5">
              List your job to find the perfect specialist for the role
            </p>
            <Button
              rounded
              label="Add Job"
              className="w-fit"
              onClick={() => navigate("/add-job")}
            />
          </MyCard>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
