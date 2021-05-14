/*-----------------------------------------------------------------------------*

FILE
src/components/link.js

DESCRIPTION
Link component. Links can have an icon or no icon, and can have a level of importance such as 'primary' for which specific CSS classes are applied for specific appearances.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faWhatsappSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faBriefcase,
  faFileUser,
  faEnvelope,
  faCalendarPlus,
  faUserCircle,
} from "@fortawesome/pro-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(
  faLinkedin,
  faWhatsappSquare,
  faGithub,
  faClock,
  faBriefcase,
  faFileUser,
  faEnvelope,
  faCalendarPlus,
  faUserCircle
);
config.autoAddCss = false;
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Link = ({
  level = "",
  icon = "",
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
  /* If the link has an href... */
  if (href) {
    /* If the link has href and icon... */
    if (icon) {
      return (
        <a
          href={href}
          target={target}
          className={"link icon " + level + " " + className}
          title={title}
          rel={rel}
        >
          <FontAwesomeIcon icon={icon} />
          {children}
        </a>
      );
    } else {
      /* If the link has href but no icon... */
      return (
        <a
          href={href}
          target={target}
          className={"link " + level + " " + className}
          title={title}
          rel={rel}
        >
          {children}
        </a>
      );
    }
  } else {
    /* If the link has no href... */
    /* If the link has no href and icon... */
    if (icon) {
      return (
        <span className={"link icon " + level + " " + className} title={title}>
          <FontAwesomeIcon icon={icon} />
          {children}
        </span>
      );
    } else {
      /* If the link has href but no icon... */
      return (
        <span className={"link " + level + " " + className} title={title}>
          {children}
        </span>
      );
    }
  }
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Link.propTypes = {
  level: PropTypes.string,
  icon: PropTypes.array,
  href: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  level: "",
  href: "",
  className: "",
  title: "",
  target: "",
  children: [],
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Link;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
