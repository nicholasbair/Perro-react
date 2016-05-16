import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/auth';
import { Jumbotron, Button } from 'react-bootstrap';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div className="home-jumbotron-container">
        <Jumbotron className="home-jumbotron">
          <h1 className="home-jumbotron-headline">Come back soon!</h1>
          <p>I hope you enjoyed my React/Redux app.</p>
        </Jumbotron>
      </div>
    );
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func.isRequired
};

export default connect(null, { signoutUser })(Signout);
