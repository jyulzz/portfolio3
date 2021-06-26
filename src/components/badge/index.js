/* IMPORTS */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import * as styles from "./badge.module.scss";
let classNamesBind = classNames.bind(styles);

/* CORE */
const Badge = ({ title = "", children = {} }) => {
  return (
    <span className={classNamesBind("badge")} role="img" title={title}>
      {children}
    </span>
  );
};

/* PROPERTIES */
Badge.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Badge.defaultProps = {
  title: "",
  children: [],
};

/* EXPORTS */
export default Badge;
