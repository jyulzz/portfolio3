/*-----------------------------------------------------------------------------*

FILE
src/components/animation.js

DESCRIPTION
Animation component based on lottie-web.

*-----------------------------------------------------------------------------*/

import React from "react";
import axios from "axios";
import lottie from "lottie-web";
import Img from "gatsby-image/withIEPolyfill";

const Animation = ({ id, src, bg }) => {
  const fetchData = React.useCallback(() => {
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
        lottie.setQuality("low");
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
          fluid={bg}
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ height: "100%", width: "100%" }}
          className="background"
          fadeIn="false"
        />
      </div>
    </>
  );
};

export default Animation;
