/* -----------------------------------------------------------------------------*

FILE
src/components/ui-kit/menu/menu.js

DESCRIPTION
Builds the main navigation menu.

*----------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  IMPORTS
*---------------------------------------------------------------------------- */
import React from "react";
import MenuItems from "components/ui-kit/menu/items";
import MenuToggle from "components/ui-kit/menu/toggle";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faAdjust } from "@fortawesome/pro-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faAdjust);
config.autoAddCss = false;
/* ----------------------------------------------------------------------------*
  /IMPORTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */
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
        return "light";
      default:
        return "dark";
    }
  }

  render() {
    return (
      <nav id="main">
        <MenuToggle isToggleOn={false} action={this.toggleOverlaidMenu} />

        <div className="list">
          <MenuItems />
        </div>

        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <button
              id="themeToggler"
              aria-label="Theme Toggler"
              title="Switch Theme"
              onClick={(e) => toggleTheme(this.switchTheme())}
            >
              <span>
                <FontAwesomeIcon icon={faAdjust} />
              </span>
            </button>
          )}
        </ThemeToggler>

        {/* This part of the menu is the menu within an overlay displayed on small screens. The menu items are simply duplicated to simplify logic. */}
        <div
          className={
            "overlay " + (this.state.isOpen === true ? "open" : "closed")
          }
          onClick={() => {
            this.clickThemeToggler("#menuToggle");
          }}
          role="button"
          aria-hidden="true"
        >
          <div className="pane">
            <ul>
              <MenuItems />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
/* ----------------------------------------------------------------------------*
  COMPONENTS
*---------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------*
  EXPORTS
*---------------------------------------------------------------------------- */
export default Menu;
/* ----------------------------------------------------------------------------*
  /EXPORTS
*---------------------------------------------------------------------------- */
