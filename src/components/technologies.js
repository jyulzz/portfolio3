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
import { useStaticQuery, graphql } from "gatsby";
import Link from "./link";
import { Gem } from "./gems";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Technologies = () => {
  const technologies = [];

  /* Pull items from the list on Contentful with the slug 'technologies' */
  const contentfulData = useStaticQuery(graphql`
    {
      allContentfulList(filter: { slug: { eq: "technologies" } }) {
        edges {
          node {
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
      }
    }
  `);

  /* For each item (technology), create an HTML anchor tag containing a li tag with their logo and a link to their site. */
  contentfulData.allContentfulList.edges["0"].node.items.forEach((item) => {
    technologies.push(
      <Link href={item.link} key={item.id} target="_blank">
        <Gem
          title={item.name}
          image={item.icon.file.url}
          vector="true"
          width="80"
          height="80"
        />
      </Link>
    );
  });
  return technologies;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Technologies;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
