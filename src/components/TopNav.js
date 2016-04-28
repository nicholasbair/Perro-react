import React from 'react';
import { Navbar } from 'react-bootstrap';

const textColor = {
  color: '#f5f6f6'
};

const TopNav = () =>
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#" style={textColor}>Perro-React</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>;

export default TopNav;
