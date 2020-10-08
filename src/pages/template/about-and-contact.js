/*-----------------------------------------------------------------------------*

FILE
src/pages/template/about.js

DESCRIPTION
Page template for the About page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "../../components/grid";
import Title from "../../components/title";
import Section from "../../components/section";
import Link from "../../components/link";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  OPTIONS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  /OPTIONS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  FUNCTIONS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  /FUNCTIONS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const AboutAndContact = () => {
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
    <Container id="about-and-contact">
      <Section id="about">
        <Title level="1">About</Title>
        <ul>
          <li>
            <Link
              level="primary"
              icon={["fas", "briefcase"]}
              href={data.workLink.url}
              title={data.workLink.title}
            >
              Work
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
  );
};
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default AboutAndContact;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
