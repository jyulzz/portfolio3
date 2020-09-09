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
import SEO from "../components/seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import FooterContent from "./template/content-footer";
import { Container } from "../components/grid";
import "../styles/pages/404.scss";

/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Page not found" />
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
        <FooterContent />
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
