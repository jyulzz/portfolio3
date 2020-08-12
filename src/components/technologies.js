/*-----------------------------------------------------------------------------*

FILE
/components/technologies.js

DESCRIPTION
Displays icons linked to sites of technologies used by the author.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "./link";
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
        <span
          className="gem"
          role="img"
          style={{ backgroundImage: `url(${"https://" + item.icon.file.url})` }}
          title={item.name}
        ></span>
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
