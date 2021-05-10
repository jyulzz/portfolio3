/*-----------------------------------------------------------------------------*

FILE
src/components/versions/versions.js

DESCRIPTION
Builds the Versions section used on the Index page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { Container } from "../../components/grid";
import Title from "../../components/title";
import Section from "../../components/section";
import VersionsItems from "./items";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
const Versions = () => {
  return (
    <Container>
      <Section id="versions">
        <Title level="1">
          <div>Versions</div>
        </Title>
        <VersionsItems />
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
export default Versions;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
