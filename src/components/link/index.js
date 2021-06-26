/* IMPORTS */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import * as styles from "./link.module.scss";
library.add(far, fab);
config.autoAddCss = false;
let classNamesBind = classNames.bind(styles);

/* CORE */
const Link = ({
  level = "",
  icon = "",
  direction = "",
  rel = "",
  href = "",
  className = "",
  title = "",
  target = "",
  children = {},
}) => {
  if (href.includes("http")) {
    rel = "noreferrer";
  } else {
    rel = "";
  }

  if (href && icon) {
    return (
      <a
        href={href}
        target={target}
        className={classNamesBind(
          "link",
          "icon",
          `${level}`,
          `${direction}`,
          `${className}`
        )}
        title={title}
        rel={rel}
      >
        <FontAwesomeIcon icon={icon} />
        {children}
      </a>
    );
  }

  if (href && !icon) {
    return (
      <a
        href={href}
        target={target}
        className={classNamesBind(
          "link",
          `${level}`,
          `${direction}`,
          `${className}`
        )}
        title={title}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  if (!href && icon) {
    return (
      <span
        className={classNamesBind(
          "link",
          "icon",
          `${level}`,
          `${direction}`,
          `${className}`
        )}
        title={title}
      >
        <FontAwesomeIcon icon={icon} />
        {children}
      </span>
    );
  }

  if (!href && !icon) {
    return (
      <span
        className={classNamesBind(
          "link",
          `${level}`,
          `${direction}`,
          `${className}`
        )}
        link={title}
      >
        {children}
      </span>
    );
  }

  return null;
};

/* PROPERTIES */
Link.propTypes = {
  level: PropTypes.string,
  icon: PropTypes.array,
  direction: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  level: "",
  href: "",
  direction: "",
  className: "",
  title: "",
  target: "",
  children: [],
};

/* EXPORTS */
export default Link;
