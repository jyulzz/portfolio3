/* ----------------------------------------------------------------------------*

FILE
src/components/ui-kit/menu/items.js

DESCRIPTION
Builds an array with menu items based on Contentful data.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Link from "components/ui-kit/link";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
function MenuItems({ menuItems, data = {} }) {
  menuItems = [];
  data = useStaticQuery(graphql`
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
      default:
        return null;
    }

    menuItems.push(
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
  return menuItems;
}
/* ----------------------------------------------------------------------------*
  /COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */
MenuItems.propTypes = {
  menuItems: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
MenuItems.defaultProps = {
  menuItems: [],
  data: {},
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default MenuItems;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
