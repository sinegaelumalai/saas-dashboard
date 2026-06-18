import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll browser window
    window.scrollTo(0, 0);

    // Scroll dashboard container
    const container = document.querySelector(".main-scroll");

    if (container) {
      container.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;