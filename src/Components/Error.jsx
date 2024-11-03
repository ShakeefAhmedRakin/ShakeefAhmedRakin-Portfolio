import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto px-3 md:px-5 lg:px-20 xl:px-28 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="font-text">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-lg">
          Oops! This page does not exist or is under construction.
        </p>
        <p className="mt-2">Please check the URL or return to the homepage.</p>
        <Link
          to={"/"}
          className="btn bg-primary border-none hover:bg-primary text-white mt-4"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
