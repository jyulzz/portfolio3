/* IMPORTS */
import React from "react";
import PropTypes from "prop-types";
import { ViewportProvider, connectViewport } from "react-viewport-utils";
import { View, Grid, Container } from "components/view";
import SmoothScroll from "components/smoothscroll";
import Logo from "components/logo";
import Menu from "components/menu";
import classNames from "classnames/bind";
import * as styles from "./header.module.scss";
let classNamesBind = classNames.bind(styles);

const HeaderContent = ({ scroll = {} }) => (
  <>
    <SmoothScroll />
    <header
      className={classNamesBind("header", scroll.y > 0 ? "scrolled" : "")}
      data-scroll-header
    >
      <View>
        <Grid>
          <Container className={classNamesBind("container")}>
            <Logo title="Hello, World." />
          </Container>
          <Container className={classNamesBind("container")}>
            <Menu scrollY={scroll.y} />
          </Container>
        </Grid>
      </View>
    </header>
  </>
);

const HeaderAnimated = connectViewport()(HeaderContent);

const Header = () => (
  <ViewportProvider>
    <HeaderAnimated />
  </ViewportProvider>
);

/* PROPS */
HeaderContent.propTypes = {
  scroll: PropTypes.object,
};

HeaderContent.defaultProps = {
  scroll: {},
};

/* EXPORTS */
export default Header;
