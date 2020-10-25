/*-----------------------------------------------------------------------------*

FILE
src/components/pagination.js

DESCRIPTION
Template for the Pagination component used in the Project template.

*-----------------------------------------------------------------------------*/

/* -----------------------------------------------------------------------------*
  IMPORTS
*----------------------------------------------------------------------------- */
import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faTrafficCone } from "@fortawesome/pro-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "../components/link";
import Title from "../components/title";
import {
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faLongArrowRight, faTrafficCone);
config.autoAddCss = false;
/* -----------------------------------------------------------------------------*
  /IMPORTS
*----------------------------------------------------------------------------- */

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.previousProjectSlug = this.props.previousProjectSlug;
    this.previousProjectTitle = this.props.previousProjectTitle;
    this.previousProjectImagePreview = this.props.previousProjectImagePreview;
    this.nextProjectSlug = this.props.nextProjectSlug;
    this.nextProjectTitle = this.props.nextProjectTitle;
    this.nextProjectImagePreview = this.props.nextProjectImagePreview;
  }

  previousProject() {
    return (
      <div className="project previous">
        {/* If there is a previous project, display a link to it */}
        {this.previousProjectSlug === null ? (
          ""
        ) : (
          <>
            <div className="card">
              <div className="preview">
                <Img
                  fluid={this.previousProjectImagePreview}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={this.previousProjectTitle}
                  style={{ height: "100%" }}
                  className="previousProjectImagePreview"
                  fadeIn="false"
                />
              </div>
              <div className="information">
                <div className="title">{this.previousProjectTitle}</div>
                <Link href={"/work/" + this.previousProjectSlug}>
                  <FontAwesomeIcon icon={faLongArrowLeft} />
                  {"View previous project"}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  nextProject() {
    return (
      <div className="project next">
        {/* If there is a next project, display a link to it */}
        {this.nextProjectSlug === null ? (
          ""
        ) : (
          <>
            <div className="card">
              <div className="preview">
                <Img
                  fluid={this.nextProjectImagePreview}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={this.nextProjectTitle}
                  style={{ height: "100%" }}
                  className="nextProjectImagePreview"
                  fadeIn="false"
                />{" "}
              </div>
              <div className="information">
                <div className="title">{this.nextProjectTitle}</div>

                <Link
                  href={"/work/" + this.nextProjectSlug}
                  className="inverted"
                >
                  {"View next project"}
                  <FontAwesomeIcon icon={faLongArrowRight} />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  render() {
    return (
      <>
        {/* This section item will receive classes reflecting the presence of absence of projects before and after it. */}
        <section
          id="pagination"
          className={`
        ${this.previousProjectSlug === null ? "null" : "previous"}
        ${this.nextProjectSlug === null ? "null" : "next"}`}
        >
          <Title level="1">
            <div>More Projects</div>
          </Title>

          <div className="projects">
            {this.previousProject()}
            {this.nextProject()}
          </div>
        </section>
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
export default Pagination;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
