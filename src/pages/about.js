/*-----------------------------------------------------------------------------*

FILE
src/pages/about.js

DESCRIPTION
Page template for the About page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Conf from "../../conf.yml";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import FooterContent from "./template/content-footer";
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
              "https://" +
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
      indexOGImage: contentfulAsset(title: { eq: "Index OG Image" }) {
        file {
          url
        }
      }
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
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
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
      <GatsbySeo
        title="About"
        description="Jules Thivent is a product designer focused on creating growth and success by delivering great user experiences since 2006."
        openGraph={{
          type: "website",
          title: "About | Jules Thivent - Product and UX Designer – Portfolio",
          locale: "enUS",
          description:
            "Jules Thivent is a product designer focused on creating growth and success by delivering great user experiences since 2006.",
          images: [
            {
              url: data.indexOGImage.file.url + "?fm=png&w=800&h=600",
              width: 800,
              height: 600,
              alt: "Jules Thivent - Product and UX Designer – Portfolio",
            },
          ],
        }}
      />

      <Header />

      <Main className="about">
        <div className="contentful-rich-text-types">
          <div className="portrait">
            <figure className="image">
              <Img
                fluid={data.contentfulPerson.photo.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={data.contentfulPerson.name}
                style={{ height: "100%" }}
              />
              <figcaption>{data.contentfulPerson.name}}</figcaption>
            </figure>
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
