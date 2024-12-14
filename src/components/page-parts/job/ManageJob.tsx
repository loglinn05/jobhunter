import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

interface ManageJobProps {
  jobId: string;
  deleteJobFunction: (id: string) => void;
}

const ManageJob = ({ jobId, deleteJobFunction }: ManageJobProps) => {
  const navigate = useNavigate();

  const onDeleteButtonClick = function () {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) return;
    deleteJobFunction(jobId);
    navigate("/jobs");
  };
  
  const onEditButtonClick = function () {
    navigate(`/jobs/${jobId}/edit`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-6">Manage Job</h3>
      <div className="flex flex-col gap-4">
        <Button label="Edit Job" rounded onClick={onEditButtonClick} />
        <Button
          label="Delete Job"
          severity="danger"
          rounded
          onClick={onDeleteButtonClick}
        />
      </div>
    </div>
  );
};

export default ManageJob;
