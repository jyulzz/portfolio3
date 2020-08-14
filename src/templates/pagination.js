/*-----------------------------------------------------------------------------*

FILE
templates/pagination.js

DESCRIPTION
Template for the Pagination component used in the Project template

*-----------------------------------------------------------------------------*/

/* -----------------------------------------------------------------------------*
  IMPORTS
*----------------------------------------------------------------------------- */
import React from "react";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faTrafficCone } from "@fortawesome/pro-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "../components/link";
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
    this.nextProjectSlug = this.props.nextProjectSlug;
    this.nextProjectTitle = this.props.nextProjectTitle;
  }

  previousProject() {
    return (
      <div className="project previous">
        {/* If there is a previous project, display a link to it */}
        {this.previousProjectSlug == null ? (
          ""
        ) : (
          <>
            <div>{this.previousProjectTitle}</div>
            <Link href={"/work/" + this.previousProjectSlug}>
              <FontAwesomeIcon icon={faLongArrowLeft} />
              {"View previous project"}
            </Link>
          </>
        )}
      </div>
    );
  }

  nextProject() {
    return (
      <div className="project next">
        {/* If there is a next project, display a link to it */}
        {this.nextProjectSlug == null ? (
          ""
        ) : (
          <>
            <div>{this.nextProjectTitle}</div>
            <Link href={"/work/" + this.nextProjectSlug} className="inverted">
              {"View next project"}
              <FontAwesomeIcon icon={faLongArrowRight} />
            </Link>
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
        ${this.previousProjectSlug == null ? "null" : "previous"}
        ${this.nextProjectSlug == null ? "null" : "next"}`}
        >
          {this.previousProject()}
          {this.nextProject()}
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
