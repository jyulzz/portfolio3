/* -----------------------------------------------------------------------------*

FILE
/components/work/projects.js

DESCRIPTION
Builds a block showing previews of Projects pulled from Contentful.

*----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------*
IMPORTS
*----------------------------------------------------------------------------- */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowRight } from "@fortawesome/pro-regular-svg-icons";
import { faTrafficCone } from "@fortawesome/pro-solid-svg-icons";
import Title from "../../components/title";
import Link from "../../components/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faLongArrowRight, faTrafficCone);
config.autoAddCss = false;
/* -----------------------------------------------------------------------------*
/IMPORTS
*----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------*
COMPONENTS
*----------------------------------------------------------------------------- */
const Projects = () => {
  const projects = [];

  /* Pull the list of Projects on Contentful */
  const contentfulData = useStaticQuery(graphql`
    {
      released: allContentfulProject(filter: { released: { eq: true } }) {
        edges {
          node {
            id
            slug
            title
            organization
            tools {
              icon {
                file {
                  url
                }
              }
              name
            }
            imagePreview {
              file {
                url
              }
            }
            description {
              description
            }
            released
            releaseDate(formatString: "MMMM DD, YYYY")
            inProgress
          }
        }
      }
      unreleased: allContentfulProject(filter: { released: { eq: false } }) {
        edges {
          node {
            id
            slug
            title
            organization
            tools {
              icon {
                file {
                  url
                }
              }
              name
            }
            imagePreview {
              file {
                url
              }
            }
            description {
              description
            }
            released
            releaseDate(formatString: "MMMM DD, YYYY")
            inProgress
          }
        }
      }
    }
  `);

  /* Create style array with background image and size information */
  const style = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  /* For each Project found in Contentful response */
  contentfulData.released.edges.forEach((node) => {
    /* Add an HTML item to the projects array with information from the Contentful Project item */
    projects.push(
      <div key={node.node.id} className="project-thumbnail" id={node.node.slug}>
        <a
          href={"/work/" + node.node.slug}
          className="thumbnail"
          style={style}
          name={node.node.title}
        >
          <img
            src={node.node.imagePreview.file.url}
            alt={node.node.title}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </a>
        <div className="information">
          <Title level="2">{node.node.title}</Title>
          <div className="organization-date">
            <span className="organization">{node.node.organization}</span>
            <> </>{" "}
            {node.node.inProgress === true ? (
              <div className="inProgress">
                <FontAwesomeIcon icon={faTrafficCone} />
                Work in Progress
              </div>
            ) : (
              <span className="date">
                <>
                  {" "}
                  •{" "}
                  {node.node.releaseDate.substring(
                    node.node.releaseDate.length - 4
                  )}
                </>
              </span>
            )}
          </div>
          <div className="description">{node.node.description.description}</div>
          <Link href={"/work/" + node.node.slug} level="primary">
            View Project<> </>
            <FontAwesomeIcon icon={faLongArrowRight} />
          </Link>
        </div>
      </div>
    );
  });

  /* For each Project found in Contentful response */
  contentfulData.unreleased.edges.forEach((node) => {
    /* Add an HTML item to the projects array with information from the Contentful Project item */
    projects.push(
      <div key={node.node.id} className="project-thumbnail" id={node.node.slug}>
        <span className="thumbnail" style={style}>
          <img
            src={node.node.imagePreview.file.url}
            alt={node.node.title}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </span>
        <div className="information">
          <Title level="2">{node.node.title}</Title>
          <div className="organization-date">
            {node.node.organization === null ? (
              ""
            ) : (
              <span className="organization">{node.node.organization}</span>
            )}
            <></>
            {node.node.inProgress === true ? (
              <div className="inProgress">
                <FontAwesomeIcon icon={faTrafficCone} />
                Work in Progress
              </div>
            ) : (
              <span className="date">
                <>
                  {" "}
                  •{" "}
                  {node.node.releaseDate.substring(
                    node.node.releaseDate.length - 4
                  )}
                </>
              </span>
            )}
          </div>
          <div className="description">{node.node.description.description}</div>
          <Link level="inactive" icon={["fas", "clock"]}>
            Coming {node.node.releaseDate}
          </Link>
        </div>
      </div>
    );
  });

  return projects;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
  *-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
  *-----------------------------------------------------------------------------*/
export default Projects;
/*-----------------------------------------------------------------------------*
  /EXPORTS
  *-----------------------------------------------------------------------------*/
