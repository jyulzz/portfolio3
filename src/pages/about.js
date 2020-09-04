/*-----------------------------------------------------------------------------*

FILE
pages/about.js

DESCRIPTION
Page template for the About page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Conf from "../../conf.yaml";
import SEO from "../components/seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import FooterContent from "./template/content-footer";
import Image from "../components/image";
import Link from "../components/link";
import "../styles/pages/about.scss";

/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  OPTIONS
*-----------------------------------------------------------------------------*/

/* 'options' contains rendering directives for Rich Text content received from Contentful, including embedded assets, paragraphs and headers. */
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      let { description, file } = node.data.target.fields;
      return (
        <figure>
          <img
            src={
              file[Conf.ContentfulDefaultLocale].url +
              "?fm=jpg&fl=progressive&q=80"
            }
            alt={description[Conf.ContentfulDefaultLocale]}
          />
        </figure>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3>{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4>{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5>{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6>{children}</h6>;
    },
  },
};
/*-----------------------------------------------------------------------------*
  /OPTIONS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  FUNCTIONS
*-----------------------------------------------------------------------------*/

/* If 'window' object exists, add smooth scrolling to links in the main navigation menu 'nav#main' */
if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")("nav#main a[href*='#']", {
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
const AboutPage = () => {
  const paragraphs = [];

  const paragraphsR = [];

  const data = useStaticQuery(graphql`
    {
      contentfulPage(slug: { eq: "/about/" }) {
        id
        paragraphs {
          id
          slug
          title
          content {
            json
          }
        }
      }
      contentfulPerson(name: { eq: "Jules Thivent" }) {
        name
        function
        photo {
          file {
            url
          }
        }
      }
      workLink: contentfulLink(shortname: { eq: "work" }) {
        id
        url
      }
      cvLink: contentfulLink(shortname: { eq: "cv" }) {
        id
        url
      }
      linkedinLink: contentfulLink(shortname: { eq: "linkedin" }) {
        id
        url
      }
    }
  `);

  data.contentfulPage.paragraphs.forEach((paragraph) => {
    paragraphs.push({
      title: paragraph.title,
      id: paragraph.id,
      json: paragraph.content.json,
      slug: paragraph.slug,
    });
  });
  paragraphs.forEach((p) => {
    paragraphsR.push(
      <div className={"block " + p.slug} key={p.id}>
        <h3>{p.title}</h3>
        <span className="rte">
          {documentToReactComponents(p.json, options)}
        </span>
      </div>
    );
  });

  return (
    <>
      <SEO title="About" />

      <Header />

      <Main className="about">
        <div className="contentful-rich-text-types">
          <div className="portrait">
            <Image
              src={
                "https://" +
                data.contentfulPerson.photo.file.url +
                "?fm=jpg&fl=progressive&q=80"
              }
            />
          </div>

          <div className="text">
            <div className="block">
              <h1>{data.contentfulPerson.name}</h1>
              <ul className="links">
                <li>
                  <Link
                    level="primary"
                    icon={["fas", "briefcase"]}
                    href={data.workLink.url}
                    target="_self"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    icon={["fas", "file-user"]}
                    href={data.cvLink.url}
                    target="_blank"
                  >
                    CV
                  </Link>
                </li>
                <li>
                  <Link
                    icon={["fab", "linkedin"]}
                    href={data.linkedinLink.url}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            {paragraphsR}
          </div>
        </div>
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
export default AboutPage;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
