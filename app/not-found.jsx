import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen text-center -mt-20">
      <div>
        <h1 className="text-5xl font-extrabold text-slate-800 m-8">404</h1>
        <h2 className="text-4xl font-semibold text-slate-800">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mt-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="text-blue-500 mt-6 inline-block">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
