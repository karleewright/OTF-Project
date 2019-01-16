import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,} from "reactstrap";
import {  Link } from "react-router-dom";
import './NavBarCSS.css';

export default class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  

  render() {
    return (
      <div>
        <Navbar striped color="warning" light expand="md">
          <NavbarBrand href="/">Welcome Karlee Wright!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               <Link to="/" className="home">Home</Link> 
              </NavItem>

              <NavItem >
                <Link to="/about" className="about">About</Link>
              </NavItem>

  
              </Nav>
          </Collapse>
        </Navbar>
      
      </div>
    
    );
  }

}