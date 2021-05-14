/*-----------------------------------------------------------------------------*

FILE
src/components/hero.js

DESCRIPTION
Hero section used on the Index page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Options from "../../options/about.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container } from "../../components/ui-kit/view";
import Section from "../../components/ui-kit/section";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Hero = ({ data = {}, options = {} }) => {
  options = Options;
  /* Pull the Site entry from Contentful for this site. */
  data = useStaticQuery(graphql`
    {
      contentfulSite(slug: { eq: "jules-thivent" }) {
        id
        name
        hero {
          raw
        }
      }
    }
  `);
  return (
    <Container>
      <Section id="hero">
        {documentToReactComponents(
          JSON.parse(data.contentfulSite.hero.raw),
          options
        )}
      </Section>
    </Container>
  );
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
Hero.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};
Hero.defaultProps = {
  data: {},
  options: {},
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Hero;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
