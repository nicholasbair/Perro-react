import React, { Component, PropTypes } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { authenticate } from '../actions/index';

class TopNav extends Component {
  renderSignLinks() {
    if (this.props.authenticated) {
      // Show a link to signout
      return (
        <Nav pullRight>
          <li className="nav-item">
            <Link className="nav-link" to="/signout">Sign Out</Link>
          </li>
        </Nav>
      );
    }
    // Show a link to signin
    return (
      <Nav pullRight>
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      </Nav>
    );
  }

  render() {
    const textColor = {
      color: '#f5f6f6'
    };

    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" style={textColor}>Perro-React</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderSignLinks()}
      </Navbar>
    );
  }
}

// Navbar.propTypes = {
//   authenticated: PropTypes.bool.isRequired
// };

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(TopNav);
