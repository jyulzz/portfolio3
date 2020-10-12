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
  FUNCTIONS
*-----------------------------------------------------------------------------*/

/* If 'window' object exists, add smooth scrolling to links in the main navigation menu 'nav#main' */
if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('nav#main a[href*="#"]', {
    header: "[data-scroll-header]",
    offset: 80,
    speed: 500,
    speedAsDuration: true,
    easing: "easeInOutQuad",
    updateURL: true,
    popstate: true,
    clip: true,
  });
}

/*-----------------------------------------------------------------------------*
  /FUNCTIONS
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
      aboutLink: contentfulLink(shortname: { eq: "about" }) {
        id
        url
        title
      }
      meetingLink: contentfulLink(shortname: { eq: "30minmeeting" }) {
        id
        url
        title
      }
      workLink: contentfulLink(shortname: { eq: "work" }) {
        id
        url
        title
      }
      cvLink: contentfulLink(shortname: { eq: "cv" }) {
        id
        url
        title
      }
      linkedinLink: contentfulLink(shortname: { eq: "linkedin" }) {
        id
        url
        title
      }
      emailLink: contentfulLink(shortname: { eq: "email" }) {
        id
        url
        title
      }
      whatsappLink: contentfulLink(shortname: { eq: "whatsapp" }) {
        id
        url
        title
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
