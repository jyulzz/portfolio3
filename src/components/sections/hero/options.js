/* ----------------------------------------------------------------------------*

FILE
src/options/hero.js

DESCRIPTION
Render options for the Hero section for the Index page.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import Emoji from "a11y-react-emoji";
import defaultRenderingOptions from "components/misc/rendering-options";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  OPTIONS
*---------------------------------------------------------------------------- */
/* 'options' contains rendering directives for Rich Text content received from Contentful, including embedded assets, paragraphs and headers. */
const defaultOptions = defaultRenderingOptions;

const specificOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1>
          <Emoji symbol="👋" label="Waiving Hand Emoji" /> {children}
        </h1>
      );
    },
  },
};

const Options = Object.assign(defaultOptions, specificOptions);
/* ----------------------------------------------------------------------------*
  /OPTIONS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default Options;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
