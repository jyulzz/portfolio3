/* ----------------------------------------------------------------------------*

FILE
src/components/sections/technologies.js

DESCRIPTION
Displays icons linked to sites of technologies used in this project.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Badges from "../ui-kit/badges.js";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const Technologies = ({ technologiesData = {} }) => {
  technologiesData = useStaticQuery(graphql`
    {
      contentfulList(slug: { eq: "technologies" }) {
        id
        items {
          ... on ContentfulItem {
            id
            name
            link
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return <Badges data={technologiesData} id="technologies" />;
};
/* ----------------------------------------------------------------------------*
  /COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */
Technologies.propTypes = {
  technologiesData: PropTypes.object.isRequired,
};
Technologies.defaultProps = {
  technologiesData: {},
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default Technologies;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
