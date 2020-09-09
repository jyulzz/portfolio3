/*-----------------------------------------------------------------------------*

FILE
src/components/menu/items.js

DESCRIPTION
Builds a menuItems array with menu items based on Contentful data.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "../../components/link";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*--------------------import { useHistory } from 'react-router-dom';---------------------------------------------------------*/

function MenuItems() {
  const menuItems = [];
  const contenfulData = useStaticQuery(graphql`
    {
      allContentfulMenu(filter: { slug: { eq: "main" } }) {
        edges {
          node {
            id
            slug
            Items {
              ... on ContentfulLink {
                id
                url
                title
                target
              }
              ... on ContentfulAnchor {
                id
                anchor
                title
              }
              ... on ContentfulPage {
                id
                slug
                title
                target
              }
            }
          }
        }
      }
    }
  `);

  /* Depending on the type of item returned from Contentful (out-of-site link with a url, link to a site page with slug, or anchor link within the page, add the correctly formatted <li/> tag to the menuItems array)*/
  contenfulData.allContentfulMenu.edges["0"].node.Items.forEach((item) => {
    var itemHref;
    var itemTarget;
    if ("url" in item) {
      itemHref = item.url;
      itemTarget = item.target;
    } else if ("slug" in item) {
      itemHref = item.slug;
      itemTarget = item.target;
    } else if ("anchor" in item) {
      itemHref = "" + item.anchor;
      itemTarget = "_self";
    }
    menuItems.push(
      <li
        key={item.id}
        onClick={() => {
          document.querySelector("#menuToggle").click();
        }}
        role="presentation"
      >
        <Link href={itemHref} target={itemTarget}>
          <span>{item.title}</span>
        </Link>
      </li>
    );
  });
  return menuItems;
}
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default MenuItems;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
