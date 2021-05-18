/* ----------------------------------------------------------------------------*

FILE
src/components/misc/rendering-options/index.js

DESCRIPTION
Default render options.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  OPTIONS
*---------------------------------------------------------------------------- */
/* 'options' contains rendering directives for Rich Text content received from Contentful, including embedded assets, paragraphs and headers. */
const defaultRenderingOptions = {
  renderNode: {
    [MARKS.BOLD]: (node, children) => {
      return <b>{children}</b>;
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
/* ----------------------------------------------------------------------------*
  /OPTIONS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default defaultRenderingOptions;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
