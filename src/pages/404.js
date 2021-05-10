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
import { Container } from "../components/grid";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import "../styles/pages/404.scss";
import "../styles/pages/project.scss";

/*-----------------------------------------------------------------------------*
  /IMPORTS
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
export default NotFoundPage;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
