import React from "react";
import { Navbar, NavbarBrand} from "mdbreact";


class NavBar extends React.Component {
 
  render() {
    return (

      <Navbar color="orange" dark expand="lg">
      <NavbarBrand left="true" className="white-text"> Welcome Karlee!</NavbarBrand>
           
      </Navbar>
    );
  }
}

export default NavBar;