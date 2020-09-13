/*-----------------------------------------------------------------------------*

FILE
src/components/animation.js

DESCRIPTION
Animation component, based on lottie-web.

*-----------------------------------------------------------------------------*/

import React from "react";
import axios from "axios";
import lottie from "lottie-web";

const Animation = ({ id, src }) => {
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: src,
    })
      .then((response) => {
        lottie.loadAnimation({
          container: document.querySelector("#scene-" + id),
          animationData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  }, [id, src]);

  React.useEffect(() => {
    fetchData();
  });

  return (
    <>
      <div id={"scene-" + id} className="animation" />
    </>
  );
};

export default Animation;
