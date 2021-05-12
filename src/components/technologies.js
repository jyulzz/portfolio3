/*-----------------------------------------------------------------------------*

FILE
src/components/technologies.js

DESCRIPTION
Displays icons linked to sites of technologies used in this project.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Link from "./link";
import { Gem } from "./gems";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Technologies = ({ technologies, data }) => {
  technologies = [];

  /* Pull items from the list on Contentful with the slug 'technologies' */
  data = useStaticQuery(graphql`
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

  /* For each item (technology), create an HTML anchor tag containing a li tag with their logo and a link to their site. */
  data.contentfulList.items.forEach((item) => {
    technologies.push(
      <Link href={item.link} key={item.id} target="_blank">
        <Gem title={item.name}>
          <img
            src={"https://" + item.icon.file.url}
            alt={item.name}
            height="100%"
            width="100%"
          />
        </Gem>
      </Link>
    );
  });
  return technologies;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Technologies.propTypes = {
  technologies: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
Technologies.defaultProps = {
  technologies: [],
  data: {},
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Technologies;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
