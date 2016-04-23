import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavBarInstance extends Component {
  render() {
    let textColor = {
      color: '#f5f6f6'
    };

    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" style={textColor}>Perro-React</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}
