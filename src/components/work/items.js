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
import {
  faTrafficCone,
  faCalendarCheck,
  faClock,
} from "@fortawesome/pro-solid-svg-icons";
import Title from "../../components/title";
import Link from "../../components/link";
import Animation from "../../components/animation";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faLongArrowRight, faTrafficCone, faCalendarCheck, faClock);
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
            subtitle
            organizations {
              name
            }
            tags {
              name
            }
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
            content {
              raw
            }
            releaseDate(formatString: "MMMM DD, YYYY")
            released
            inProgress
            readingTime
            updatedAt(formatString: "MMM.DD.YYYY")
          }
        }
      }
    }
  `);

  /* For each Project found in Contentful response */
  contentfulData.projects.items.forEach((item) => {
    var organizationsArray = [];
    var tagsArray = [];

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
          {item.organizations &&
          item.released === true &&
          item.inProgress === false
            ? item.organizations.forEach((organization) => {
                organizationsArray.push(
                  <div className="tag organization">{organization.name}</div>
                );
              })
            : ""}

          {organizationsArray.length > 1 ? (
            <div className="tag organization">Multiple Organizations</div>
          ) : (
            <div className="tag organization">{organizationsArray}</div>
          )}

          {item.released === false ? (
            <div className="tag releaseDate">Coming {item.releaseDate}</div>
          ) : (
            ""
          )}
          {item.released === true && item.inProgress === false ? (
            <div className="tag date">
              {item.releaseDate.substring(item.releaseDate.length - 4)}
            </div>
          ) : (
            ""
          )}
          {item.inProgress === true ? (
            <div className="tag inProgress">Work in Progress</div>
          ) : (
            ""
          )}
          <div className="description">{item.description.description}</div>
          {item.released === true ? (
            <div className="linkWrapper out">
              <div className="linkWrapper in">
                <Link href={"/work/" + item.slug} level="primary">
                  View this Project <FontAwesomeIcon icon={faLongArrowRight} />
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="tags">
            <>
              {item.tags
                ? item.tags.forEach((tag) => {
                    tagsArray.push(
                      <div className="tag generic">{tag.name}</div>
                    );
                  })
                : ""}
              {item.released === true ? (
                <div className="tag readingTime">
                  {item.readingTime} mins read
                </div>
              ) : (
                ""
              )}
              {tagsArray}
            </>
          </div>
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
