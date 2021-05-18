/* ----------------------------------------------------------------------------*

FILE
src/pages/404.js

DESCRIPTION
Page template for the 404 page.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "components/misc/seo";
import { Container } from "components/ui-kit/view";
import Header from "pages/template/header";
import Main from "pages/template/main";
import Footer from "pages/template/footer";
import "styles/pages/404.scss";
import "styles/pages/project.scss";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const NotFoundPage = ({ data = {} }) => {
  data = useStaticQuery(graphql`
    {
      indexOGImage: contentfulAsset(title: { eq: "Index OG Image" }) {
        file {
          url
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="404 - Page not found"
        description="The page or element you are looking for cannot be found."
        OGImage={data.indexOGImage.file.url}
      />

      <Header />

      <Main className="notfound">
        <Container>
          <h1>404 – Page Not Found</h1>
          <h2>The page or element you are looking for cannot be found.</h2>
          <h2>
            You can try going to the{" "}
            <button
              className="link"
              onClick={() => {
                window.history.go(-1);
              }}
              role="link"
            >
              previous page
            </button>{" "}
            or starting from the{" "}
            <a className="link" href="/">
              homepage
            </a>
            .
          </h2>
        </Container>
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
NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
};
NotFoundPage.defaultProps = {
  data: {},
};
/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default NotFoundPage;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
