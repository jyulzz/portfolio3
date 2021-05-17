/* ----------------------------------------------------------------------------*

FILE
src/options/project.js

DESCRIPTION
Render options for the template for the Project pages created through code in /gatsby-node.js

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "components/ui-kit/link/link";
import Conf from "conf/conf.yml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faTrafficCone } from "@fortawesome/pro-solid-svg-icons";
import {
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/pages/project.scss";
library.add(faTrafficCone, faLongArrowLeft, faLongArrowRight);
config.autoAddCss = false;
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  OPTIONS
*---------------------------------------------------------------------------- */
/* 'options' contains rendering directives for Rich Text content received from Contentful, including embedded assets, paragraphs and headers. */
const Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (node.data.target.gatsbyImageData) {
        return (
          <figure>
            <img
              srcSet={node.data.target.gatsbyImageData.images.sources[0].srcSet}
              alt={node.data.target.description}
            />
            <figcaption>
              {" "}
              <span className="description">
                {node.data.target.description}
              </span>
              <Link href={node.data.target.file.url} target="_blank" level="">
                Open In New Window <FontAwesomeIcon icon={faLongArrowRight} />
              </Link>
            </figcaption>
          </figure>
        );
      } else {
        return (
          <figure>
            <img
              src={node.data.target.file.url}
              alt={node.data.target.description}
            />
            <figcaption>
              {" "}
              <span className="description">
                {node.data.target.description}
              </span>
              <Link href={node.data.target.file.url} target="_blank" level="">
                Open In New Window <FontAwesomeIcon icon={faLongArrowRight} />
              </Link>
            </figcaption>
          </figure>
        );
      }
    },

    [INLINES.EMBEDDED_ENTRY]: (node) => {
      switch (node.data.target.__typename) {
        case "ContentfulIFrame":
          return (
            <figure>
              <iframe
                title={node.data.target.id}
                className="iframe"
                src={node.data.target.url}
              ></iframe>
              <figcaption>
                {" "}
                <span className="description">{node.data.target.name}</span>
                <Link href={node.data.target.url} target="_blank" level="">
                  Open In New Window <FontAwesomeIcon icon={faLongArrowRight} />
                </Link>
              </figcaption>
            </figure>
          );
        default:
          return <></>;
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      return (
        <Link href={node.data.uri} target="_blank" level="">
          {node.content[0].value}
        </Link>
      );
    },
    [INLINES.ASSET_HYPERLINK]: (node) => {
      return (
        <Link
          href={
            "https://" +
            node.data.target.fields.file[Conf.ContentfulDefaultLocale].url
          }
          target="_blank"
          level=""
        >
          {node.content[0].value}
        </Link>
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
