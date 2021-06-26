/* IMPORTS */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames/bind";
import Link from "components/link";
import * as styles from "./menu.module.scss";
let classNamesBind = classNames.bind(styles);

/* CORE */
const MenuItems = ({ menuItems, data = {} }) => {
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
        className={classNamesBind("item")}
        key={item.id}
        onClick={() => {
          document.querySelector("#menuToggle").click();
        }}
        role="presentation"
      >
        <Link
          href={itemHref}
          target={itemTarget}
          className={classNamesBind("link")}
        >
          <span className={classNamesBind("span")}>{item.title}</span>
        </Link>
      </div>
    );
  });

  return menuItems;
};

/* PROPERTIES */
MenuItems.propTypes = {
  menuItems: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
MenuItems.defaultProps = {
  menuItems: [],
  data: {},
};

/* EXPORTS */
export default MenuItems;
