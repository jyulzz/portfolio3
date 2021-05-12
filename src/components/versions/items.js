/*-----------------------------------------------------------------------------*

FILE
src/components/versions/items.js

DESCRIPTION
Builds a block showing previews of Versions pulled from Contentful.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Title from "../../components/title";
import Link from "../../components/link";
import Thumbnail from "../../components/thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowRight } from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faLongArrowRight);
config.autoAddCss = false;
/*-----------------------------------------------------------------------------*
/IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
COMPONENTS
*-----------------------------------------------------------------------------*/
const VersionsItems = ({ versionsItems, data }) => {
  /* Pull the list of Projects on Contentful*/
  data = useStaticQuery(graphql`
    {
      versions: contentfulList(slug: { eq: "versions" }) {
        items {
          ... on ContentfulVersion {
            id
            name
            description {
              description
            }
            imagePreview {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            description {
              description
            }
            animation {
              file {
                url
              }
            }
            animationBackground {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            releaseDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `);

  /* For each Project found in Contentful response */
  data.versions.items.forEach((item) => {
    /* Add an HTML item to the projects array with information from the Contentful Project item */
    versionsItems.push(
      <div key={item.id} className="version-thumbnail" id={item.slug}>
        <Thumbnail
          animation={item.animation}
          animationBackground={item.animationBackground}
          id={item.id}
          title={item.Title}
        />

        <div className="information">
          <Title level="2">Portfolio Version {item.name}</Title>
          <div className="tag date">
            {"Published in "}
            {item.releaseDate.substring(item.releaseDate.length - 4)}
          </div>
          <div className="linkWrapper out">
            <div className="linkWrapper in">
              <Link href={item.url} target="__blank" level="primary">
                View this Version <FontAwesomeIcon icon={faLongArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return versionsItems;
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  PROPS
*-----------------------------------------------------------------------------*/
VersionsItems.propTypes = {
  versionsItems: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
VersionsItems.defaultProps = {
  versionsItems: [],
  data: {},
};
/*-----------------------------------------------------------------------------*
  /PROPS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default VersionsItems;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
