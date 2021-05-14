/* ----------------------------------------------------------------------------*

FILE
src/pages/about.js

DESCRIPTION
Page template for the About page.

*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Options from "../options/about.js";
import _JSXStyle from "styled-jsx/style";
import Img from "gatsby-image/withIEPolyfill";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Seo from "../components/misc/seo";
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import Link from "../components/ui-kit/link";
import "../styles/pages/about.scss";
import "../styles/pages/project.scss";
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
const AboutPage = ({ paragraphs = [], data = {} }) => {
  data = useStaticQuery(graphql`
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
            raw
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
    paragraphs.push(
      <div className={"block " + paragraph.slug} key={paragraph.id}>
        <h3>{paragraph.title}</h3>
        <span className="rte">
          {documentToReactComponents(
            JSON.parse(paragraph.content.raw),
            Options
          )}
        </span>
      </div>
    );
  });

  return (
    <>
      <Seo
        title="About"
        description="Jules Thivent is a product designer focused on creating growth and success by delivering great user experiences since 2006."
        OGImage={data.indexOGImage.file.url}
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
            {paragraphs}
          </div>
        </div>
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
AboutPage.propTypes = {
  paragraphs: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
AboutPage.defaultProps = {
  paragraphs: [],
  data: {},
};
/* ----------------------------------------------------------------------------*
  /PROPS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default AboutPage;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
