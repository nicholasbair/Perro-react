import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/index';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>Sorry to see you go.</div>
    );
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func.isRequired
};

export default connect(null, { signoutUser })(Signout);
