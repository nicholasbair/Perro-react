import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { authenticate } from '../actions/index';

class TopNav extends Component {
  renderSign() {
    if (this.props.authenticated) {
      return (
        <NavItem onClick={() => this.props.authenticate(false)}>
          Sign Out
        </NavItem>
      );
    }
    return <NavItem href="/signin">Sign In</NavItem>;
  }

  render() {
    console.log(this.props.authenticated);
    const textColor = {
      color: '#f5f6f6'
    };

    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" style={textColor}>Perro-React</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          {this.renderSign()}
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, { authenticate })(TopNav);
