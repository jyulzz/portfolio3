/* ----------------------------------------------------------------------------*

FILE
src/components/misc/smooth-scroll.js

DESCRIPTION
Smooth scroll component.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import { useEffect } from "react";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
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
/* ----------------------------------------------------------------------------*
  /COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default SmoothScroll;
/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
