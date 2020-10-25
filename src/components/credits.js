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
import { useStaticQuery, graphql } from "gatsby";
import Link from "./link";
import Img from "gatsby-image/withIEPolyfill";
import { Diamond } from "./gems";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Credits = () => {
  const credits = [];

  /* Pull items from the list on Contentful with the slug 'credited-people' */
  const contentfulData = useStaticQuery(graphql`
    {
      allContentfulList(filter: { slug: { eq: "credits" } }) {
        edges {
          node {
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
      }
    }
  `);

  /* For each item (credited person), create an HTML anchor tag containing a li tag with their photo and a link to their profile. */
  contentfulData.allContentfulList.edges["0"].node.items.forEach((item) => {
    credits.push(
      <Link href={item.link} key={item.id} target="_blank">
        <Diamond title={item.name}>
          <Img
            fluid={item.photo.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            fadeIn="false"
          />
        </Diamond>
      </Link>
    );
  });
  return credits;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Credits;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
