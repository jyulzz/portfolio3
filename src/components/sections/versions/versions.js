/*-----------------------------------------------------------------------------*

FILE
src/components/sections/versions/versions.js

DESCRIPTION
Builds the Versions section used on the Index page.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { Container } from "../../ui-kit/view";
import Title from "../../ui-kit/title";
import Section from "../../ui-kit/section";
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