/*-----------------------------------------------------------------------------*

FILE
src/components/thumbnail.js

DESCRIPTION
Thumbnail component used in Work and Versions cards

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import Animation from "./animation";
import Img from "gatsby-image/withIEPolyfill";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Thumbnail = ({
  animation,
  animationBackground,
  imagePreview,
  id,
  title,
}) => {
  return (
    <span className="thumbnail">
      {animation !== null && animationBackground !== null ? (
        <Animation
          id={id}
          src={animation.file.url}
          background={animationBackground.fluid}
        />
      ) : (
        <Img
          fluid={imagePreview.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={title}
          style={{ height: "100%" }}
        />
      )}
    </span>
  );
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Thumbnail.propTypes = {
  animation: PropTypes.object.isRequired,
  animationBackground: PropTypes.object.isRequired,
  imagePreview: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
Thumbnail.defaultProps = {
  animation: {},
  animationBackground: {},
  imagePreview: {},
  id: "",
  title: "",
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Thumbnail;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
