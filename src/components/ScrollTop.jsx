import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo(top);
      }}
      className={`${
        showButton ? "fixed" : "hidden"
      } transition-all bottom-5 right-5 bg-primary w-[40px] h-[40px] flex items-center justify-center text-lg text-white overflow-hidden group`}
    >
      <FaArrowUp />
      {/* Hover overlay */}
      <div className="absolute w-full h-full bg-black opacity-20 top-0 right-[-100%] group-hover:right-0 transition-all"></div>
    </button>
  );
};

export default ScrollTop;
