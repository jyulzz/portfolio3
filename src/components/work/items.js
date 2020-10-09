/* -----------------------------------------------------------------------------*

FILE
sc /components/work/projects.js

DESCRIPTION
Builds a block showing previews of Projects pulled from Contentful.

*----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------*
IMPORTS
*----------------------------------------------------------------------------- */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowRight } from "@fortawesome/pro-regular-svg-icons";
import { faTrafficCone } from "@fortawesome/pro-solid-svg-icons";
import Title from "../../components/title";
import Link from "../../components/link";
import Animation from "../../components/animation";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faLongArrowRight, faTrafficCone);
config.autoAddCss = false;
/* -----------------------------------------------------------------------------*
/IMPORTS
*----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------*
COMPONENTS
*----------------------------------------------------------------------------- */
const Items = () => {
  const projects = [];

  /* Pull the list of Projects on Contentful */
  const contentfulData = useStaticQuery(graphql`
    {
      projects: contentfulList(slug: { eq: "projects" }) {
        items {
          ... on ContentfulProject {
            id
            slug
            title
            organization
            imagePreview {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            description {
              description
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
            releaseDate(formatString: "MMMM DD, YYYY")
            released
            inProgress
          }
        }
      }
    }
  `);

  /* For each Project found in Contentful response */
  contentfulData.projects.items.forEach((item) => {
    /* Add an HTML item to the projects array with information from the Contentful Project item */
    projects.push(
      <div key={item.id} className="project-thumbnail" id={item.slug}>
        <span className="thumbnail">
          {item.animation !== null && item.animationBackground !== null ? (
            <Animation
              id={item.id}
              src={item.animation.file.url}
              bg={item.animationBackground.fluid}
            />
          ) : (
            <Img
              fluid={item.imagePreview.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={item.title}
              style={{ height: "100%" }}
            />
          )}
        </span>
        <div className="information">
          <Title level="2">{item.title}</Title>
          <div className="organization-date">
            {item.organization === null ? (
              ""
            ) : (
              <span className="organization">{item.organization}</span>
            )}
            <></>
            {item.inProgress === true ? (
              <div className="inProgress">
                <FontAwesomeIcon icon={faTrafficCone} />
                Work in Progress
              </div>
            ) : (
              <span className="date">
                <>
                  {" "}
                  • {item.releaseDate.substring(item.releaseDate.length - 4)}
                </>
              </span>
            )}
          </div>
          <div className="description">{item.description.description}</div>
          {item.released === true ? (
            <Link href={"/work/" + item.slug} level="primary">
              View Project<> </>
              <FontAwesomeIcon icon={faLongArrowRight} />{" "}
            </Link>
          ) : (
            <Link level="inactive" icon={["fas", "clock"]}>
              Coming {item.releaseDate}
            </Link>
          )}
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
export default Items;
/*-----------------------------------------------------------------------------*
  /EXPORTS
  *-----------------------------------------------------------------------------*/
