import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent border-b-transparent loading"></div>
    </div>
  );
};

export default Loading;
