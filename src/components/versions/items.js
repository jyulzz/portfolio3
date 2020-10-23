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
import Img from "gatsby-image/withIEPolyfill";
import Title from "../../components/title";
import Link from "../../components/link";
import Animation from "../../components/animation";
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
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            animation {
              file {
                url
              }
            }
            animationBackground {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
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
        <a
          href={node.node.url}
          className="thumbnail"
          name={"View " + node.node.name}
        >
          {node.node.animation !== null &&
          node.node.animationBackground !== null ? (
            <Animation
              id={node.node.id}
              src={node.node.animation.file.url}
              bg={node.node.animationBackground.fluid}
            />
          ) : (
            <Img
              fluid={node.node.imagePreview.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={node.node.name}
              style={{ height: "100%" }}
              fadeIn="false"
            />
          )}
        </a>
        <div className="information">
          <Title level="2">Portfolio Version {node.node.name}</Title>
          <div className="tag date">
            Published in{" "}
            {node.node.releaseDate.substring(node.node.releaseDate.length - 4)}
          </div>
          <div className="linkWrapper out">
            <div className="linkWrapper in">
              <Link href={node.node.url} target="__blank" level="primary">
                View this Version <FontAwesomeIcon icon={faLongArrowRight} />
              </Link>
            </div>
          </div>
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
