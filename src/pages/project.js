/*-----------------------------------------------------------------------------*

FILE
src/pages/project.js

DESCRIPTION
Template for the Project pages created through code in /gatsby-node.js

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/

import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Seo from "../components/seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import Link from "../components/link";
import Conf from "../../conf.yml";
import Pagination from "../components/pagination";
import Animation from "../components/animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faTrafficCone } from "@fortawesome/pro-solid-svg-icons";
import {
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/pages/project.scss";
library.add(faTrafficCone, faLongArrowLeft, faLongArrowRight);
config.autoAddCss = false;

/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  OPTIONS
*-----------------------------------------------------------------------------*/

/* 'options' contains rendering directives for Rich Text content received from Contentful, including embedded assets, paragraphs and headers. */
const options = {
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
/*-----------------------------------------------------------------------------*
  /OPTIONS
*-----------------------------------------------------------------------------*/

export const query = graphql`
  query($slug: String, $previousProjectSlug: String, $nextProjectSlug: String) {
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

const ProjectPage = ({ data, pageContext }) => {
  let previousProjectSlug;
  let previousProjectTitle;
  let previousProjectImagePreviewFluid;
  let nextProjectSlug;
  let nextProjectTitle;
  let nextProjectImagePreviewFluid;

  let projectData = data.project.nodes[0];

  let tagsArray = [];

  let organizationsArray = [];

  if (data.previousProject.nodes[0]) {
    previousProjectImagePreviewFluid =
      data.previousProject.nodes[0].imagePreview.fluid;
    previousProjectSlug = pageContext.previousProjectSlug;
    previousProjectTitle = pageContext.previousProjectTitle;
  } else {
    previousProjectImagePreviewFluid =
      data.lastProject.nodes[0].imagePreview.fluid;
    previousProjectSlug = data.lastProject.nodes[0].slug;
    previousProjectTitle = data.lastProject.nodes[0].title;
  }

  if (data.nextProject.nodes[0]) {
    nextProjectImagePreviewFluid = data.nextProject.nodes[0].imagePreview.fluid;
    nextProjectSlug = pageContext.nextProjectSlug;
    nextProjectTitle = pageContext.nextProjectTitle;
  } else {
    nextProjectImagePreviewFluid =
      data.firstProject.nodes[0].imagePreview.fluid;
    nextProjectSlug = data.firstProject.nodes[0].slug;
    nextProjectTitle = data.firstProject.nodes[0].title;
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
                        organizationsArray.push(
                          <div className="tag organization">
                            {organization.name}
                          </div>
                        );
                      })
                    : ""}

                  {organizationsArray.length > 1 ? (
                    <div className="tag organization">
                      Multiple Organizations
                    </div>
                  ) : (
                    <>{organizationsArray}</>
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
                        tagsArray.push(
                          <div className="tag generic">{tag.name}</div>
                        );
                      })
                    : ""}
                  {projectData.released === true ? (
                    <div className="tag readingTime">
                      {projectData.readingTime} mins read
                    </div>
                  ) : (
                    ""
                  )}
                  {tagsArray}
                </>
              </div>
            </div>
            <div className="image">
              {projectData.animation !== null &&
              projectData.animationBackground !== null ? (
                <Animation
                  id={projectData.id}
                  src={projectData.animation.file.url}
                  bg={projectData.animationBackground.fluid}
                />
              ) : (
                <Img
                  fluid={projectData.imagePreview.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={projectData.title}
                  style={{ height: "100%" }}
                />
              )}
            </div>
          </div>
          {/* This is the Rich Text rendering section */}
          <section className="contentful-rich-text-types">
            {renderRichText(projectData.content, options)}
          </section>
          <Pagination
            previousProjectSlug={previousProjectSlug}
            previousProjectTitle={previousProjectTitle}
            previousProjectImagePreview={previousProjectImagePreviewFluid}
            nextProjectSlug={nextProjectSlug}
            nextProjectTitle={nextProjectTitle}
            nextProjectImagePreview={nextProjectImagePreviewFluid}
          />
        </section>
      </Main>

      <Footer />
    </>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

ProjectPage.defaultProps = {
  data: [],
  pageContext: [],
};

export default ProjectPage;
