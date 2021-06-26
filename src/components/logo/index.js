/* IMPORTS */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames/bind";
import Link from "components/link";
import * as styles from "./logo.module.scss";
let classNamesBind = classNames.bind(styles);

/* CORE */
const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      logoLinkTitle: contentfulString(slug: { eq: "logo-link-title" }) {
        value {
          value
        }
      }
      logoLinkContent: contentfulString(slug: { eq: "logo-link-content" }) {
        value {
          value
        }
      }
    }
  `);

  return (
    <Link
      href="/"
      level=""
      title={data.logoLinkTitle.value.value}
      tabIndex="0"
      className={classNamesBind("logo")}
    >
      {data.logoLinkContent.value.value}
    </Link>
  );
};

/* EXPORTS */
export default Logo;
