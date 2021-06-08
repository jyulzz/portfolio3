/* ----------------------------------------------------------------------------*

FILE
src/components/ui-kit/view.js

DESCRIPTION
Contains the View, Grid and Container components that are used to build the grid system used throughout this portfolio.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const View = ({ children = {} }) => {
  return <div className="view">{children}</div>;
};
const Grid = ({ children = {} }) => {
  return <div className="grid">{children}</div>;
};
const Container = ({ id = "", className = "", children = {} }) => {
  return (
    <div className={"container " + className} id={id}>
      {children}
    </div>
  );
};
/* ----------------------------------------------------------------------------*
  /COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */
View.propTypes = {
  children: PropTypes.node.isRequired,
};

View.defaultProps = {
  children: [],
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  children: [],
};

Container.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  id: "",
  className: "",
  children: [],
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export { View, Grid, Container };
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
