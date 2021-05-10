/*-----------------------------------------------------------------------------*

FILE
src/components/grid.js

DESCRIPTION
Contains the View, Grid and Container components that are used to build the grid system used throughout this portfolio.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import PropTypes from "prop-types";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Seo = ({ title, description, OGImage }) => {
  return (
    <GatsbySeo
      title={title}
      description={description}
      openGraph={{
        type: "website",
        title: title + " | Jules Thivent - Product and UX Designer – Portfolio",
        locale: "enUS",
        description: description,
        images: [
          {
            url: "https://" + OGImage + "?fm=png&w=800&h=600",
            width: 800,
            height: 600,
            alt: "Jules Thivent - Product and UX Designer – Portfolio",
          },
        ],
      }}
    />
  );
};

/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  OGImage: PropTypes.string.isRequired,
};

Seo.defaultProps = {
  title: "Home",
  description:
    "Jules Thivent is a product designer focused on creating growth and success by delivering great user experiences since 2006.",
  OGImage: "",
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Seo;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
