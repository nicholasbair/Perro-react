import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <Link to="/app">App</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}
