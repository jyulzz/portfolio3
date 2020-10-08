/*-----------------------------------------------------------------------------*

FILE
src/pages/404.js

DESCRIPTION
Page template for the 404 page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Emoji from "a11y-react-emoji";
import { Container } from "../components/grid";
import Title from "../components/title";
import Section from "../components/section";
import { Gems } from "../components/gems";
import Link from "../components/link";
import Credits from "../components/credits";
import Technologies from "../components/technologies";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import AboutAndContact from "./template/about-and-contact";
import "../styles/pages/404.scss";
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
const NotFoundPage = () => {
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
        title="404 — Page not found"
        description="The page or element you are looking for cannot be found."
        openGraph={{
          type: "website",
          title: "About | Jules Thivent - Product and UX Designer – Portfolio",
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
      <Footer>
        <AboutAndContact />
        <Container>
          <Title level="1">Credits</Title>
          <Section>
            <Title level="2">License</Title>
            <Emoji symbol="🇪🇺" label="Flag: European Union" />
            Published under EUPL v1.2
          </Section>
          <Section>
            <Title level="2">Design &amp; Code</Title>
            <Emoji symbol="✌️" label="Victory Hand Emoji" />
            {""}100% by me{" | "}
            <Link
              className="inverted"
              href="https://github.com/jyulzz/portfolio3"
              target="_blank"
              level=""
              title="View on GitHub"
            >
              View on GitHub <FontAwesomeIcon icon={faLongArrowRight} />
            </Link>
          </Section>

          <Section>
            <Title level="2">Inspiration</Title>
            <Emoji symbol="🙏" label="Person With Folded Hands Emoji" /> Many
            thanks
            <Gems id="credits">
              <Credits />
            </Gems>
          </Section>
          <Section>
            <Title level="2">Stack</Title>
            <Emoji symbol="💪" label="Flexed Biceps Emoji" /> What I build this
            with
            <Gems id="technologies">
              <Technologies />
            </Gems>
          </Section>
        </Container>
      </Footer>
    </>
  );
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default NotFoundPage;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
