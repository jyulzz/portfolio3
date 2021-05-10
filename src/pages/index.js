/*-----------------------------------------------------------------------------*

FILE
src/pages/index.js

DESCRIPTION
Page template for the Index page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import Hero from "../components/hero";
import Work from "../components/work/work";
import Versions from "../components/versions/versions";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/pages/index.scss";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const IndexPage = () => {
  const data = useStaticQuery(graphql`
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
      <GatsbySeo
        title="Home"
        description="Jules Thivent is a product designer focused on creating growth and success by delivering great user experiences since 2006."
        openGraph={{
          type: "website",
          title: "Home | Jules Thivent - Product and UX Designer – Portfolio",
          locale: "enUS",
          description:
            "Jules Thivent is a product designer focused on creating growth and success by delivering great user experiences since 2006.",
          images: [
            {
              url:
                "https://" + data.indexOGImage.file.url + "?fm=png&w=800&h=600",
              width: 800,
              height: 600,
              alt: "Jules Thivent - Product and UX Designer – Portfolio",
            },
          ],
        }}
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
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default IndexPage;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
