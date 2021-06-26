/* IMPORTS */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import * as styles from "./layout.module.scss";
let classNamesBind = classNames.bind(styles);

/* CORE */
const Layout = ({ id, type, children = {} }) => {
  return <div className={classNamesBind("layout", `${type}`)}>{children}</div>;
};

/* PROPERTIES */
Layout.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  id: "",
  type: "",
  children: [],
};

/* EXPORTS */
export default Layout;
