/*-----------------------------------------------------------------------------*

FILE
src/components/smooth-scroll.js

DESCRIPTION
Smooth scroll component.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const SmoothScroll = () => {
  /* If 'window' object exists, add smooth scrolling to links in the main navigation menu 'nav#main' */
  if (typeof window !== "undefined") {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require("smooth-scroll")('nav#main a[href*="#"]', {
      header: "[data-scroll-header]",
      offset: 80,
      speed: 500,
      speedAsDuration: true,
      easing: "easeInOutQuad",
      updateURL: true,
      popstate: true,
      clip: true,
    });
  }
  return null;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default SmoothScroll;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
