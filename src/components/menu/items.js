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
*-----------------------------------------------------------------------------*/

function MenuItems() {
  const menuItemsArray = [];
  const data = useStaticQuery(graphql`
    {
      contentfulMenu(slug: { eq: "main" }) {
        id
        slug
        Items {
          ... on ContentfulLink {
            id
            url
            title
            target
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulAnchor {
            id
            anchor
            title
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulPage {
            id
            slug
            title
            target
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  `);

  /* Depending on the type of item returned from Contentful (out-of-site link with a url, link to a site page with slug, or anchor link within the page, add the correctly formatted <li/> tag to the menuItems array)*/
  data.contentfulMenu.Items.forEach((item) => {
    var itemHref;
    var itemTarget;

    switch (item.sys.contentType.sys.id) {
      case "link":
        itemHref = item.url;
        itemTarget = item.target;
        break;
      case "anchor":
        itemHref = "" + item.anchor;
        itemTarget = "_self";
        break;
      case "page":
        itemHref = item.slug;
        itemTarget = item.target;
        break;
    }

    menuItemsArray.push(
      <div
        className="item"
        key={item.id}
        onClick={() => {
          document.querySelector("#menuToggle").click();
        }}
        role="presentation"
      >
        <Link href={itemHref} target={itemTarget}>
          <span>{item.title}</span>
        </Link>
      </div>
    );
  });
  return menuItemsArray;
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
