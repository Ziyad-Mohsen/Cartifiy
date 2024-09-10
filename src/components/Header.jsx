import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link, useLocation } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
// Logo
import logo from "../imgs/logo.png";
// icons
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  const [active, setActive] = useState(false); // To change the header color
  const { newItemsAdded, handleOpenSidebar } = useContext(SidebarContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll to top when changing pages
  useScrollToTop();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all z-10  ${
        active
          ? "bg-white shadow-lg"
          : isHomePage
          ? "bg-transparent text-primary"
          : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="w-[50px]">
              <img src={logo} alt="logo" className="max-w-full" />
            </div>
          </Link>
          <div
            onClick={handleOpenSidebar}
            className="relative text-5xl w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
          >
            {newItemsAdded.state && (
              // The new items dots
              <div className="absolute w-5 h-5 bg-red-500 left-[-10px] top-0 rounded-full text-sm font-semibold text-white flex items-center justify-center">
                {`${newItemsAdded.number < 100 ? newItemsAdded.number : "+99"}`}
              </div>
            )}
            <AiOutlineShopping />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
