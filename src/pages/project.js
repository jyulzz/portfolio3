/* ----------------------------------------------------------------------------*

FILE
src/pages/project.js

DESCRIPTION
Template for the Project pages created through code in /gatsby-node.js

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Options from "../options/project.js";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Seo from "../components/misc/seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import Pagination from "../components/ui-kit/pagination";
import Thumbnail from "../components/ui-kit/thumbnail";
import "../styles/pages/project.scss";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  DATA
*---------------------------------------------------------------------------- */
export const query = graphql`
  query (
    $slug: String
    $previousProjectSlug: String
    $nextProjectSlug: String
  ) {
    firstProject: allContentfulProject(
      limit: 1
      sort: { fields: updatedAt, order: DESC }
      filter: { released: { eq: true } }
    ) {
      nodes {
        slug
        title
        imagePreview {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    lastProject: allContentfulProject(
      limit: 1
      sort: { fields: updatedAt, order: ASC }
      filter: { released: { eq: true } }
    ) {
      nodes {
        slug
        title
        imagePreview {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    previousProject: allContentfulProject(
      filter: { slug: { eq: $previousProjectSlug } }
    ) {
      nodes {
        imagePreview {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    nextProject: allContentfulProject(
      filter: { slug: { eq: $nextProjectSlug } }
    ) {
      nodes {
        imagePreview {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    project: allContentfulProject(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        slug
        title
        description {
          description
        }
        subtitle
        organizations {
          name
        }
        tags {
          name
        }
        imagePreview {
          id
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
          file {
            url
          }
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        content {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              title
              gatsbyImageData
              id
              file {
                url
                fileName
                contentType
              }
              description
              fixed(width: 1600) {
                src
              }
            }
            ... on ContentfulIFrame {
              __typename
              contentful_id
              id
              name
              url
              sys {
                contentType {
                  sys {
                    id
                    type
                    linkType
                  }
                }
              }
            }
          }
        }
        inProgress
        released
        releaseDate(formatString: "MMMM DD, YYYY")
        readingTime
      }
    }
  }
`;
/* ----------------------------------------------------------------------------*
  /DATA
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const ProjectPage = ({
  data = {},
  pageContext = {},
  previousProject = {},
  nextProject = {},
  tags = [],
  organizations = [],
  projectData = {},
}) => {
  projectData = data.project.nodes[0];

  if (data.previousProject.nodes[0]) {
    previousProject.slug = pageContext.previousProjectSlug;
    previousProject.title = pageContext.previousProjectTitle;
    previousProject.imagePreview =
      data.previousProject.nodes[0].imagePreview.fluid;
  } else {
    previousProject.slug = data.lastProject.nodes[0].slug;
    previousProject.title = data.lastProject.nodes[0].title;
    previousProject.imagePreview = data.lastProject.nodes[0].imagePreview.fluid;
  }

  if (data.nextProject.nodes[0]) {
    nextProject.slug = pageContext.nextProjectSlug;
    nextProject.title = pageContext.nextProjectTitle;
    nextProject.imagePreview = data.nextProject.nodes[0].imagePreview.fluid;
  } else {
    previousProject.slug = data.firstProject.nodes[0].slug;
    previousProject.title = data.firstProject.nodes[0].title;
    previousProject.imagePreview =
      data.firstProject.nodes[0].imagePreview.fluid;
  }

  return (
    <>
      <Seo
        title={projectData.title}
        description={projectData.description}
        OGImage={projectData.imagePreview}
      />

      <Header />

      <Main type="default" className="project">
        <section id="project">
          <div className="thumbnail">
            <div className="card">
              <h1>
                <span className="title">{projectData.title}</span>
                <span className="subtitle">{projectData.subtitle}</span>
              </h1>

              <h2>{projectData.description.description}</h2>
              <div className="tags">
                <>
                  {projectData.organizations &&
                  projectData.released === true &&
                  projectData.inProgress === false
                    ? projectData.organizations.forEach((organization) => {
                        organizations.push(
                          <div className="tag organization">
                            {organization.name}
                          </div>
                        );
                      })
                    : null}

                  {organizations.length > 1 ? (
                    <div className="tag organization">
                      Multiple Organizations
                    </div>
                  ) : (
                    <>{organizations}</>
                  )}

                  {projectData.released === true &&
                  projectData.inProgress === false ? (
                    <div className="tag date">
                      {projectData.releaseDate.substring(
                        projectData.releaseDate.length - 4
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {projectData.inProgress === true ? (
                    <div className="tag inProgress">
                      This project is a work in progress
                    </div>
                  ) : (
                    <></>
                  )}
                  {projectData.tags
                    ? projectData.tags.forEach((tag) => {
                        tags.push(
                          <div className="tag generic">{tag.name}</div>
                        );
                      })
                    : null}
                  {projectData.released === true ? (
                    <div className="tag readingTime">
                      {projectData.readingTime} mins read
                    </div>
                  ) : null}
                  {tags}
                </>
              </div>
            </div>
            <div className="image">
              <Thumbnail
                animation={projectData.animation}
                animationBackground={projectData.animationBackground}
                id={projectData.id}
                title={projectData.Title}
              />
            </div>
          </div>
          {/* This is the Rich Text rendering section */}
          <section className="contentful-rich-text-types">
            {renderRichText(projectData.content, Options)}
          </section>
          <Pagination
            previousProjectSlug={previousProject.slug}
            previousProjectTitle={previousProject.title}
            previousProjectImagePreview={previousProject.imagePreview}
            nextProjectSlug={nextProject.slug}
            nextProjectTitle={nextProject.title}
            nextProjectImagePreview={nextProject.imagePreview}
          />
        </section>
      </Main>

      <Footer />
    </>
  );
};
/* ----------------------------------------------------------------------------*
  /COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */
ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  previousProject: PropTypes.object.isRequired,
  nextProject: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  organizations: PropTypes.array.isRequired,
  projectData: PropTypes.object.isRequired,
};

ProjectPage.defaultProps = {
  data: [],
  pageContext: [],
  previousProject: {},
  nextProject: {},
  tags: [],
  organizations: [],
  projectData: {},
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default ProjectPage;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
