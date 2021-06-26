/* IMPORTS */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import * as styles from "./main.module.scss";
let classNamesBind = classNames.bind(styles);

/* CORE */
const Main = ({ id = "", children = {} }) => {
  return <main className={classNamesBind("main")}>{children}</main>;
};

/* PROPERTIES */
Main.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

Main.defaultProps = {
  id: "",
  children: [],
};

/* EXPORTS */
export default Main;
