/* ----------------------------------------------------------------------------*

FILE
src/components/ui-kit/animation.js

DESCRIPTION
Animation component based on lottie-web.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import lottie from "lottie-web";
import Img from "gatsby-image/withIEPolyfill";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const Animation = ({ id = "", src = "", background = {}, fetchData = {} }) => {
  fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: src,
    })
      .then((response) => {
        lottie.loadAnimation({
          container: document.querySelector("#animation-" + id + " .scene"),
          animationData: response.data,
          rendererSettings: {
            viewBoxOnly: true,
            id: "lottieAnimation-" + id,
            className: "lottieAnimation",
            preserveAspectRatio: "xMidYMid slice",
            filterSize: {
              width: "200%",
              height: "200%",
              x: "-50%",
              y: "-50%",
            },
          },
        });
        lottie.setQuality("high");
      })
      .catch((error) => {
        return false;
      });
  }, [id, src]);

  React.useEffect(() => {
    fetchData();
  });

  return (
    <>
      <div id={"animation-" + id} className="animation">
        <div className="scene"></div>
        <Img
          fluid={background}
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ height: "100%", width: "100%" }}
          className="background"
          fadeIn
        />
      </div>
    </>
  );
};
/* ----------------------------------------------------------------------------*
  /COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */
Animation.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
};

Animation.defaultProps = {
  id: "",
  src: "",
  background: {},
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default Animation;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
