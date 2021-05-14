/*-----------------------------------------------------------------------------*

FILE
src/components/ui-kit/title.js

DESCRIPTION
Title component with 'level' property allowing titles to be styled differently for each level defined in CSS.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Title = ({ level = "", children = {} }) => {
  return <div className={"title level" + level}>{children}</div>;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Title.propTypes = {
  level: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  level: "",
  children: [],
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Title;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
