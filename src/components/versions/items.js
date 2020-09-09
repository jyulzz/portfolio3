/*-----------------------------------------------------------------------------*

FILE
src/components/history/versions.js

DESCRIPTION
Builds a block showing previews of Versions pulled from Contentful.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Title from "../../components/title";
import Link from "../../components/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowRight } from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faLongArrowRight);
config.autoAddCss = false;
/*-----------------------------------------------------------------------------*
/IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
COMPONENTS
*-----------------------------------------------------------------------------*/
const Items = () => {
  const versions = [];

  /* Pull the list of Projects on Contentful*/
  const contentfulData = useStaticQuery(graphql`
    {
      versions: allContentfulVersion(sort: { fields: version, order: DESC }) {
        edges {
          node {
            id
            name
            description {
              description
            }
            releaseDate(formatString: "MMMM DD, YYYY")
            imagePreview {
              file {
                url
              }
            }
            url
          }
        }
      }
    }
  `);

  /* For each Project found in Contentful response */
  contentfulData.versions.edges.forEach((node) => {
    /* Add an HTML item to the projects array with information from the Contentful Project item */
    versions.push(
      <div key={node.node.id} className="version-thumbnail" id={node.node.slug}>
        <a href={node.node.url} className="thumbnail" name={node.node.name}>
          <img src={node.node.imagePreview.file.url} alt={node.node.name} />
        </a>
        <div className="information">
          <Title level="2">Portfolio Version {node.node.name}</Title>
          <div className="organization">
            Published in{" "}
            {node.node.releaseDate.substring(node.node.releaseDate.length - 4)}
          </div>
          <Link href={node.node.url} target="__blank" level="primary">
            View this version <FontAwesomeIcon icon={faLongArrowRight} />
          </Link>
        </div>
      </div>
    );
  });

  return versions;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
  *-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
  *-----------------------------------------------------------------------------*/
export default Items;
/*-----------------------------------------------------------------------------*
  /EXPORTS
  *-----------------------------------------------------------------------------*/