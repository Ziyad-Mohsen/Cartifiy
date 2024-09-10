import React from "react";

const Footer = () => {
  const time = new Date();

  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="continer flex justify-center items-center mx-auto">
        <div className="text-lg text-center px-10 py-8 font-semibold">
          <span className="text-primary">&lt;</span> Developed by{" "}
          <span className="text-primary">&gt;</span>{" "}
          <span>
            <a
              href="https://github.com/Ziyad-Mohsen"
              className="bg-gray-700 py-1 px-3 rounded-lg text-gray-200 font-bold hover:bg-gray-800 transition-colors"
            >
              Ziad
            </a>
          </span>{" "}
          <span className="text-primary">&lt;</span> All rights reserved
          {` ${time.getFullYear().toString()}`}&copy;{" "}
          <span className="text-primary">&gt;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
