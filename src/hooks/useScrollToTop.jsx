import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();
  // Scroll to top when navigating between pages
  useEffect(() => {
    window.scrollTo(top);
  }, [pathname]);
};

export default useScrollToTop;
