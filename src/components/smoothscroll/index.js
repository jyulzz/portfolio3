/* IMPORTS */
import { useEffect } from "react";

/* CORE */
const SmoothScroll = () => {
  useEffect(function mount() {
    require("smooth-scroll")("nav#main a[href*='#']", {
      header: "[data-scroll-header]",
      offset: 80,
      speed: 500,
      speedAsDuration: true,
      easing: "easeInOutQuad",
      updateURL: true,
      popstate: true,
      clip: true,
    });
  });
  return null;
};

/* EXPORTS */
export default SmoothScroll;
