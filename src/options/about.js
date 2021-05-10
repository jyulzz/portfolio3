/*-----------------------------------------------------------------------------*

FILE
src/options/about.js

DESCRIPTION
Render options for the page template for the About page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import Conf from "../../conf.yml";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  OPTIONS
*-----------------------------------------------------------------------------*/
/* 'options' contains rendering directives for Rich Text content received from Contentful, including embedded assets, paragraphs and headers. */
const Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      let { description, file } = node.data.target.fields;
      return (
        <figure>
          <img
            src={
              "https://" +
              file[Conf.ContentfulDefaultLocale].url +
              "?fm=jpg&fl=progressive&q=80"
            }
            alt={description[Conf.ContentfulDefaultLocale]}
          />
        </figure>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3>{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4>{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5>{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6>{children}</h6>;
    },
  },
};
/*-----------------------------------------------------------------------------*
  /OPTIONS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Options;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
