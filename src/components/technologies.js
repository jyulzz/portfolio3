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
import { Diamond } from "./gems";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Technologies = () => {
  const technologiesArray = [];

  /* Pull items from the list on Contentful with the slug 'technologies' */
  const data = useStaticQuery(graphql`
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
    technologiesArray.push(
      <Link href={item.link} key={item.id} target="_blank">
        <Diamond title={item.name}>
          <img
            src={"https://" + item.icon.file.url}
            alt={item.name}
            height="100%"
            width="100%"
          />
        </Diamond>
      </Link>
    );
  });
  return technologiesArray;
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
