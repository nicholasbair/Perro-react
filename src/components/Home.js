import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="home-jumbotron-container">
        <Jumbotron className="home-jumbotron">
          <h1 className="home-jumbotron-headline">Welcome to Perro-React</h1>
          <p>A React/Redux web app, and project-based adventure to challenge myself, and sharpen my JavaScript skills.</p>
          <Button className="jumbotron-button" href="/signin">Sign Up</Button>
        </Jumbotron>
      </div>
    );
  }
}
