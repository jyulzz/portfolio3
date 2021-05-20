/* ----------------------------------------------------------------------------*

FILE
src/pages/index.js

DESCRIPTION
Page template for the Index page.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "components/misc/seo";
import Header from "pages/template/header";
import Main from "pages/template/main";
import Footer from "pages/template/footer";
import Hero from "components/sections/hero";
import Work from "components/sections/work";
import Versions from "components/sections/versions";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/pages/index.scss";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const IndexPage = ({ data = {} }) => {
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
        title="Home"
        description="Jules Thivent is a product designer focused on creating growth and success by delivering great user experiences since 2006."
        OGImage={data.indexOGImage.file.url}
      />

      <Header />

      <Main className="index">
        <Hero />
        <Work />
        <Versions />
      </Main>

      <Footer />
    </>
  );
};
/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  PROPS
*---------------------------------------------------------------------------- */
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {
  data: {},
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default IndexPage;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
