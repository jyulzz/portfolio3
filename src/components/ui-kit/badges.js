/*-----------------------------------------------------------------------------*

FILE
src/components/ui-kit/badges.js

DESCRIPTION
Displays badges linked to people who's work is credited or sites of technologies
used in this project.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import Link from "../ui-kit/link";
import Img from "gatsby-image/withIEPolyfill";
import _JSXStyle from "styled-jsx/style";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/

const Badge = ({ title = "", children = {} }) => {
  return (
    <>
      {" "}
      <style jsx>{`
        .badge {
          overflow: hidden;
        }
      `}</style>
      <span className={"badge"} role="img" title={title}>
        {children}
      </span>
    </>
  );
};

const Badges = ({ data, items = [], id }) => {
  data.contentfulList.items.forEach((item) => {
    if (item.photo) {
      items.push(
        <Link href={item.link} key={item.id} target="_blank">
          <Badge title={item.name}>
            <Img
              fluid={item.photo.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </Badge>
        </Link>
      );
    } else if (item.icon) {
      items.push(
        <Link href={item.link} key={item.id} target="_blank">
          <Badge title={item.name}>
            <img
              src={item.icon.file.url}
              alt={item.name}
              height="100%"
              width="100%"
            />
          </Badge>
        </Link>
      );
    }
  });

  return (
    <div className="badges" key={id} id={id}>
      {items}
    </div>
  );
};

/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Badge.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
Badge.defaultProps = {
  title: "",
  children: [],
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Badges;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
