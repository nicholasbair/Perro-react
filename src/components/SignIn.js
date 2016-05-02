import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, FormControl, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { authenticate } from '../actions/index';
import styles from '../../style/styles';

class SignIn extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {
      this.context.router.push('/app');
    }
  }

  authButton() {
    if (!this.props.authenticated) {
      return (
        <Button
          style={styles.baseButtonStyle}
          onClick={() => this.props.authenticate(true)}
        >
          Sign In
        </Button>
      );
    }
  }

  render() {
    return (
      <div className="signin-form-container">
        <Form className="signin-form">
          <FormGroup>
            <Col sm={12}>
              <h2>Sign In</h2>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <h4>Email</h4>
            </Col>
            <Col sm={12}>
              <FormControl className="" type="" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <h4>Password</h4>
            </Col>
            <Col sm={12}>
              <FormControl className="" type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <ButtonGroup vertical block>
            {this.authButton()}
          </ButtonGroup>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, { authenticate })(SignIn);
