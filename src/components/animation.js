/*-----------------------------------------------------------------------------*

FILE
src/components/animation.js

DESCRIPTION
Animation component, based on lottie-web.

*-----------------------------------------------------------------------------*/

import React from "react";
import axios from "axios";
import lottie from "lottie-web";

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, src]);

  React.useEffect(() => {
    fetchData();
  });

  return (
    <>
      <style jsx>{`
        .animation {
          background-image: url("
        ${"https://" + bg + "?fm=png&q=100&w=800&h=600"}") !important;
        }
      `}</style>
      <div id={"animation-" + id} className="animation">
        <div className="scene"></div>
      </div>
    </>
  );
};

export default Animation;
