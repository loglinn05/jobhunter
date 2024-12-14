import App from "./App";
import { addJob, deleteJob, editJob } from "./jobStore";
import jobLoader from "./loaders/jobLoader";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";

export default [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        loader: jobLoader,
        element: <Job deleteJob={deleteJob} />,
      },
      {
        path: "/jobs/:id/edit",
        loader: jobLoader,
        element: <EditJob editJob={editJob} />,
      },
      {
        path: "/add-job",
        element: <AddJob addJob={addJob} />,
      },
    ],
  },
];
