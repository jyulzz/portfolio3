/*-----------------------------------------------------------------------------*

FILE
src/components/credits.js

DESCRIPTION
Displays photos linked to profiles of people who inspired the author.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Link from "./link";
import Img from "gatsby-image/withIEPolyfill";
import { Gem } from "./gems";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Credits = ({ credits, data }) => {
  credits = [];

  /* Pull items from the list on Contentful with the slug 'credited-people' */
  data = useStaticQuery(graphql`
    {
      contentfulList(slug: { eq: "credits" }) {
        id
        items {
          ... on ContentfulPerson {
            id
            name
            link
            photo {
              id
              fluid(maxWidth: 80) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  /* For each item (credited person), create an HTML anchor tag containing a li tag with their photo and a link to their profile. */
  data.contentfulList.items.forEach((item) => {
    credits.push(
      <Link href={item.link} key={item.id} target="_blank">
        <Gem title={item.name}>
          <Img
            fluid={item.photo.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </Gem>
      </Link>
    );
  });
  return credits;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Credits.propTypes = {
  credits: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
Credits.defaultProps = {
  credits: [],
  data: {},
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Credits;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
