import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-orange-50">
      <div className="text-center flex flex-col justify-center items-center">
        <i className="pi pi-exclamation-triangle before:text-yellow-400 text-7xl"></i>
        <h1 className="text-6xl font-bold mt-16 mb-1">404 Not Found</h1>
        <p className="text-xl mb-8">This page does not exist.</p>
        <Link
          to="/"
          className="p-button p-button-rounded border-orange-700 hover:border-orange-600 bg-orange-700 hover:bg-orange-600 text-lg !text-white"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
