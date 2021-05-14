/*-----------------------------------------------------------------------------*

FILE
src/components/ui-kit/menu/toggle.js

DESCRIPTION
Builds the toggle that triggers the overlaid navigation menu on small screens.

*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  IMPORTS
*-----------------------------------------------------------------------------*/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/pro-regular-svg-icons";
library.add(faBars, faTimes);
config.autoAddCss = false;
/*-----------------------------------------------------------------------------*
  /IMPORTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  COMPONENTS
*-----------------------------------------------------------------------------*/
class MenuToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: this.props.isToggleOn };
    this.toggler = this.toggler.bind(this);
  }

  /*
  Toggling function : if menu is shown, hide it, if menu is hidden, show it. */
  toggler() {
    if (this.state.isToggleOn === false) {
      this.setState({ isToggleOn: true });
      this.props.action(true);
      this.domElement.blur();
    } else if (this.state.isToggleOn === true) {
      this.setState({ isToggleOn: false });
      this.props.action(false);
      this.domElement.blur();
    }
  }
  render() {
    return (
      <button
        id="menuToggle"
        onClick={this.toggler}
        className={this.state.isToggleOn ? "close" : "open"}
        aria-label="Menu Toggler"
        title="Toggle Menu"
        ref={(domElement) => {
          this.domElement = domElement;
        }}
      >
        {/* Conditional rendering: if menu is visible, show 'close' icon, if menu is hidden, show 'menu' icon. */}
        {this.state.isToggleOn ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    );
  }
}
/*-----------------------------------------------------------------------------*
  /COMPONENTS
*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*
  EXPORTS
*-----------------------------------------------------------------------------*/
export default MenuToggle;
/*-----------------------------------------------------------------------------*
  /EXPORTS
*-----------------------------------------------------------------------------*/
