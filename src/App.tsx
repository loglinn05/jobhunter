import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from "react-router-dom";
import MyNavbar from "./components/layout/MyNavbar";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default App;
