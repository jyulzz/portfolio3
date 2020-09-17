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
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import SEO from "../components/seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import FooterContent from "./template/content-footer";
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
      let { description, file } = node.data.target.fields;
      return (
        <figure>
          <img
            src={file[Conf.ContentfulDefaultLocale].url}
            alt={description[Conf.ContentfulDefaultLocale]}
          />
          <figcaption>
            <span className="description">
              {description[Conf.ContentfulDefaultLocale]}
            </span>
            <Link
              href={file[Conf.ContentfulDefaultLocale].url}
              target="_blank"
              level=""
            >
              Open In New Window <FontAwesomeIcon icon={faLongArrowRight} />
            </Link>
          </figcaption>
        </figure>
      );
    },
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      switch (node.data.target.sys.contentType.sys.id) {
        case "iframe":
          return (
            <>
              <figure>
                <iframe
                  title={node.data.target.id}
                  className="iframe"
                  src={
                    node.data.target.fields.url[Conf.ContentfulDefaultLocale]
                  }
                ></iframe>
                <figcaption>
                  {" "}
                  <span className="description">
                    {node.data.target.fields.name[Conf.ContentfulDefaultLocale]}
                  </span>
                  <Link
                    href={
                      node.data.target.fields.url[Conf.ContentfulDefaultLocale]
                    }
                    target="_blank"
                    level=""
                  >
                    Open In New Window{" "}
                    <FontAwesomeIcon icon={faLongArrowRight} />
                  </Link>
                </figcaption>
              </figure>
            </>
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

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/

/* ProjectPage builds the page for a Project item received from Contentful */
class ProjectPage extends React.Component {
  card() {
    return (
      <div className="card">
        <h1>
          <span className="title">{this.props.pageContext.title}</span>
          <span className="subtitle">{this.props.pageContext.subtitle}</span>
        </h1>
        <h2>{this.props.pageContext.description}</h2>
        {this.props.pageContext.inProgress === true ? (
          <div className="inProgress">
            <FontAwesomeIcon icon={faTrafficCone} />
            This project is a work in progress
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
  thumbnail() {
    return (
      <figure className="thumbnail">
        {this.card()}
        <div className="image">
          <Animation
            id={this.props.pageContext.id}
            src={this.props.pageContext.animation}
            bg={this.props.pageContext.animationBackground}
          />
        </div>
      </figure>
    );
  }
  render() {
    return (
      <>
        <SEO title={this.props.pageContext.title} />
        <Header />

        <Main type="default" className="project">
          <section id="project">
            {this.thumbnail()}
            {/* This is the Rich Text rendering section */}
            <section className="contentful-rich-text-types">
              {documentToReactComponents(
                this.props.pageContext.content,
                options
              )}
            </section>
            <Pagination
              previousProjectSlug={this.props.pageContext.previousProjectSlug}
              previousProjectTitle={this.props.pageContext.previousProjectTitle}
              nextProjectSlug={this.props.pageContext.nextProjectSlug}
              nextProjectTitle={this.props.pageContext.nextProjectTitle}
            />
          </section>
        </Main>
        <Footer>
          <FooterContent />
        </Footer>
      </>
    );
  }
}
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default ProjectPage;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
