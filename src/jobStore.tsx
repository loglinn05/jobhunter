import { JobInterface } from "./interfaces";
import { toast } from "react-toastify";

export async function getJobs(
  limit: boolean,
  setJobs: React.Dispatch<React.SetStateAction<JobInterface[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const response = await fetch(`/api/jobs${limit ? "?limit=3" : ""}`);
    const data = await response.json();
    setJobs(data);
  } catch (error) {
    toast.error("Failed to fetch jobs");
    console.warn("An error occurred while fetching data.");
    console.error(error);
  } finally {
    setLoading(false);
  }
}

export async function addJob(job: JobInterface) {
  if (!job.salary[1]) {
    job.salary.splice(1, 1);
  }

  const response = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  if (response.ok) {
    toast.success("The job was successfully added");
  } else {
    toast.error("Failed to add job");
  }
}

export async function deleteJob(id: string) {
  const response = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    toast.success("The job was successfully deleted");
  } else {
    toast.error("Failed to delete job");
  }
}

export async function editJob(id: string, job: JobInterface) {
  const response = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  if (response.ok) {
    toast.success("The job was successfully updated");
  } else {
    toast.error("Failed to update job");
  }
}
