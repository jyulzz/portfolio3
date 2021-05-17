/* ----------------------------------------------------------------------------*

FILE
src/components/sections/work/items.js

DESCRIPTION
Builds a block showing previews of Projects pulled from Contentful.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Title from "components/ui-kit/title/title";
import Link from "components/ui-kit/link/link";
import Thumbnail from "components/ui-kit/thumbnail/thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faTrafficCone,
  faCalendarCheck,
  faClock,
} from "@fortawesome/pro-solid-svg-icons";
import { faLongArrowRight } from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faLongArrowRight, faTrafficCone, faCalendarCheck, faClock);
config.autoAddCss = false;
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const WorkItems = ({ workItems = [], data = {} }) => {
  /* Pull the list of Projects on Contentful */
  data = useStaticQuery(graphql`
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
  data.projects.items.forEach((item) => {
    var organizationsArray = [];
    var tagsArray = [];

    /* Add an HTML item to the projects array with information from the Contentful Project item */
    workItems.push(
      <div key={item.id} className="project-thumbnail" id={item.slug}>
        <Thumbnail
          animation={item.animation}
          animationBackground={item.animationBackground}
          id={item.id}
          title={item.Title}
        />

        <div className="information">
          <Title level="2">{item.title}</Title>
          {item.organizations &&
          item.released === true &&
          item.inProgress === false
            ? item.organizations.forEach((organization) => {
                organizationsArray.push(
                  <div className="tag organization" key={organization.name}>
                    {organization.name}
                  </div>
                );
              })
            : null}

          {organizationsArray.length > 1 ? (
            <div className="tag organization">Multiple Organizations</div>
          ) : (
            <div className="tag organization">{organizationsArray}</div>
          )}

          {item.released === false ? (
            <div className="tag releaseDate">Coming {item.releaseDate}</div>
          ) : null}
          {item.released === true && item.inProgress === false ? (
            <div className="tag date">
              {item.releaseDate.substring(item.releaseDate.length - 4)}
            </div>
          ) : null}
          {item.inProgress === true ? (
            <div className="tag inProgress">Work in Progress</div>
          ) : null}
          <div className="description">{item.description.description}</div>
          {item.released === true ? (
            <div className="linkWrapper out">
              <div className="linkWrapper in">
                <Link href={"/work/" + item.slug} level="primary">
                  View this Project <FontAwesomeIcon icon={faLongArrowRight} />
                </Link>
              </div>
            </div>
          ) : null}
          <div className="tags">
            <>
              {item.tags
                ? item.tags.forEach((tag) => {
                    tagsArray.push(
                      <div className="tag generic" key={tag.name}>
                        {tag.name}
                      </div>
                    );
                  })
                : ""}
              {item.released === true ? (
                <div className="tag readingTime">
                  {item.readingTime} mins read
                </div>
              ) : null}
              {tagsArray}
            </>
          </div>
        </div>
      </div>
    );
  });

  return workItems;
};
/* ----------------------------------------------------------------------------*
  /COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */
WorkItems.propTypes = {
  workItems: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
WorkItems.defaultProps = {
  workItems: [],
  data: {},
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default WorkItems;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
