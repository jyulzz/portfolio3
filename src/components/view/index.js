import React from "react";
import PropTypes from "prop-types";

const View = ({ id = "", className = "", children = {} }) => {
  return (
    <div className={"view" + className} id={id}>
      {children}
    </div>
  );
};
const Grid = ({ id = "", className = "", children = {} }) => {
  return (
    <div className={"grid" + className} id={id}>
      {children}
    </div>
  );
};
const Container = ({ id = "", className = "", children = {} }) => {
  return (
    <div className={"container " + className} id={id}>
      {children}
    </div>
  );
};

View.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

View.defaultProps = {
  className: "",
  children: [],
};

Grid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  className: "",
  children: [],
};

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: "standard",
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
