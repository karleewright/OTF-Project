import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";


class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (

      <Navbar color="orange" dark expand="lg">
          <NavbarBrand left className="white-text"> Welcome Karlee! >
           </NavbarBrand>
          
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar>
        
                <Dropdown>
                  <DropdownToggle nav caret>
                    <strong className="white-text"> Actions </strong>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/viewstats">View Stats</DropdownItem>
                    <DropdownItem href="/addstats">Add a Stat</DropdownItem>
                    <DropdownItem href="/updatestat">Update a Stat</DropdownItem>
                    <DropdownItem href="/deletestat">Delete a Stat</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;