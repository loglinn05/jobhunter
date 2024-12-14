import { useState } from "react";
import MyCard from "./MyCard";
import Salary from "./Salary";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { JobInterface } from "../interfaces";
import HR from "./HR";

interface JobCardProps {
  job: JobInterface;
}

const JobCard = ({ job }: JobCardProps) => {
  const navigate = useNavigate();

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <MyCard title={job.title} subtitle={job.type}>
      <p className="m-0">{description}</p>
      <Button
        link
        label={showFullDescription ? "Less" : "More"}
        onClick={() => setShowFullDescription((prevState) => !prevState)}
        className="w-fit px-0 pb-0 pt-2 shadow-none"
        pt={{ label: { className: "!text-orange-600" } }}
      />
      <div className="mt-auto pt-4">
        <Salary salary={job.salary} pClass="!text-orange-500" />
        <HR />
        <div className="flex flex-col">
          <p className="!text-red-600">
            <i className="pi pi-map-marker me-2 !text-red-600 !before:text-red-600"></i>
            {job.location}
          </p>
          <Button
            rounded
            label="View Job"
            onClick={() => navigate(`/jobs/${job.id}`)}
          />
        </div>
      </div>
    </MyCard>
  );
};

export default JobCard;
