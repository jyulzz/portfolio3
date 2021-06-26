/* IMPORTS */
import React from "react";
import MenuItems from "components/menu/items";
import MenuToggle from "components/menu/toggle";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faAdjust } from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import classNames from "classnames/bind";
import * as styles from "./menu.module.scss";
let classNamesBind = classNames.bind(styles);
library.add(faAdjust);
config.autoAddCss = false;

/* CORE */

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
    this.toggleOverlaidMenu = this.toggleOverlaidMenu.bind(this);
  }

  toggleOverlaidMenu(menuState) {
    this.setState({ isOpen: menuState });
  }

  blurThemeToggler(id) {
    document.querySelector(id).blur();
  }

  clickThemeToggler(id) {
    document.querySelector(id).click();
  }

  switchTheme() {
    this.blurThemeToggler("#themeToggler");
    switch (document.body.classList.contains("dark")) {
      case true:
        console.log("theme is dark, going to light");
        return "light";
      default:
        console.log("theme is light, going to dark");
        return "dark";
    }
  }

  themeToggler() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <button
            id="themeToggler"
            className={classNamesBind("themeToggler", "button")}
            aria-label="Theme Toggler"
            title=""
            onClick={(e) => toggleTheme(this.switchTheme())}
          >
            <span className={classNamesBind("span")}>
              <FontAwesomeIcon icon={faAdjust} />
            </span>
          </button>
        )}
      </ThemeToggler>
    );
  }

  render() {
    return (
      <nav id="main" className={classNamesBind("menu")}>
        <MenuToggle isToggleOn={false} action={this.toggleOverlaidMenu} />

        <div className={classNamesBind("list")}>
          <MenuItems />
        </div>

        <div
          className={classNamesBind(
            "overlay",
            this.state.isOpen === true ? "open" : "closed"
          )}
          onClick={() => {
            this.clickThemeToggler("#menuToggle");
          }}
          role="button"
          aria-hidden="true"
        >
          <div className={classNamesBind("pane")}>
            <ul>
              <MenuItems />
            </ul>
          </div>
        </div>

        {this.themeToggler()}
      </nav>
    );
  }
}

/* EXPORTS */
export default Menu;
