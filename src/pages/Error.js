import React from "react";

const Error = () => {
  return (
    <div className="text-2xl">
      Page Not Found? back to home page{" "}
      <a
        href="/"
        className="text-blue-600 underline hover:bg-blue-100 p-4 rounded-md"
      >
        click here to Home page
      </a>
    </div>
  );
};

export default Error;
