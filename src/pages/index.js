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
import { Container } from "../components/grid";
import Title from "../components/title";
import Section from "../components/section";
import Hero from "../components/hero";
import Work from "../components/work/work";
import Versions from "../components/versions/versions";
import Link from "../components/link";
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
        <Container id="about-and-contact">
          <Section id="about">
            <Title level="1">About</Title>
            <ul>
              <li>
                <Link
                  level="primary"
                  icon={["fas", "user-circle"]}
                  href={data.aboutLink.url}
                  target="_self"
                  title={data.aboutLink.title}
                >
                  Read more about me
                </Link>
              </li>
              <li>
                <Link
                  icon={["fas", "file-user"]}
                  href={data.cvLink.url}
                  target="_blank"
                  title={data.cvLink.title}
                >
                  CV/Résumé
                </Link>
              </li>
              <li>
                <Link
                  icon={["fab", "linkedin"]}
                  href={data.linkedinLink.url}
                  target="_blank"
                  title={data.linkedinLink.title}
                >
                  LinkedIn Profile
                </Link>
              </li>
            </ul>
          </Section>
          <Section id="contact">
            <Title level="1">Contact</Title>
            <ul>
              <li>
                <Link
                  level="primary"
                  href={data.meetingLink.url}
                  target="_blank"
                  icon={["fas", "calendar-plus"]}
                  title={data.meetingLink.title}
                >
                  Book a free 30 mins conversation
                </Link>
              </li>
              <li>
                <Link
                  icon={["fas", "envelope"]}
                  href={"mailto:" + data.emailLink.url}
                  title={data.emailLink.title}
                >
                  Email me at {data.emailLink.url}
                </Link>
              </li>
              <li>
                <Link
                  icon={["fab", "whatsapp-square"]}
                  href={data.whatsappLink.url}
                  target="_blank"
                  title={data.whatsappLink.title}
                >
                  Message me on WhatsApp
                </Link>
              </li>
            </ul>
          </Section>
        </Container>
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
