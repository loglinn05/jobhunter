import { LoaderFunctionArgs } from "react-router-dom";
import { JobInterface } from "../interfaces";

const jobLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<JobInterface> => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export default jobLoader;
