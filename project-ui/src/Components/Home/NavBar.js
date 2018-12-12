import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";


class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (

      <Navbar color="orange" dark expand="lg">
      <NavbarBrand left className="white-text"> Welcome Karlee!</NavbarBrand>
           
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;