/*-----------------------------------------------------------------------------*

FILE
src/pages/template/header.js

DESCRIPTION
Contains the base setup for setting the <header/> tag and its contents within the general grid system.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import PropTypes from "prop-types";
import { ViewportProvider, connectViewport } from "react-viewport-utils";
import Logo from "../../components/logo";
import Menu from "../../components/menu/menu";
import { View, Grid, Container } from "../../components/grid";
import SmoothScroll from "../../components/smooth-scroll.js";
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/

/* HeaderContent is the general container for the <header/> section */
const HeaderContent = ({ scroll }) => (
  /* Once the user has scrolled past the value 'scroll', the header will get the 'scrolled' class which triggers appearance changes based on CSS rules */
  <>
    <SmoothScroll />
    <header className={scroll.y > 0 ? "scrolled" : ""} data-scroll-header>
      <View>
        <Grid>
          <Container>
            <Logo />
            <Menu />
          </Container>
        </Grid>
      </View>
    </header>
  </>
);

/* HeaderAnimated is a wrapper used to connect HeaderContent to the viewport's state */
const HeaderAnimated = connectViewport()(HeaderContent);

/* Header is the component exported and imported to display the header in other files. */
const Header = () => (
  <ViewportProvider>
    <HeaderAnimated />
  </ViewportProvider>
);
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

HeaderContent.propTypes = {
  scroll: PropTypes.object,
};

HeaderContent.defaultProps = {
  scroll: {},
};

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default Header;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
