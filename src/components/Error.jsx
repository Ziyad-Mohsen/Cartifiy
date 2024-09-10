import React from "react";

const Error = () => {
  return (
    <div className="text-center w-full mx-auto">
      <h2>
        <span className="text-lg font-bold">Oops!</span> Something went wrong.
      </h2>
      <p>
        We're having trouble retrieving the data right now. Please try again
        later.
      </p>
    </div>
  );
};

export default Error;
