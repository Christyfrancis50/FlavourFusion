import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-100 text-gray-700 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-800">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">Oops! Page not found.</h2>
        <p className="text-lg md:text-xl mt-2">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center bg-gray-800 text-white text-lg font-bold px-6 py-3 rounded hover:bg-green-800">
          <FaHome className="mr-2" /> Go Back Home
        </Link>
      </div>
    </div>
  );
};
