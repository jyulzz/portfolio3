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
import { Gem } from "./gems";
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
                  file {
                    url
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
        <Gem
          title={item.name}
          image={item.photo.file.url}
          vector="false"
          width="240"
          height="240"
        />
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
