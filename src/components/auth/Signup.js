import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import styles from '../../../style/styles';
import { signupUser } from '../../actions/index';
import {
  Col,
  Form,
  FormGroup,
  FormControl,
  ButtonGroup,
  Button
} from 'react-bootstrap';

class Signup extends Component {
  handleFormSubmit() {
    // Call action creator to sign up the user
    const { email, password } = this.props.values;
    this.props.signupUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { fields: { email, password, passwordConfirm }, handleSubmit } = this.props;
    return (
      <div className="signup-form-container">
        <Form className="signup-form" onSubmit={handleSubmit(() => this.handleFormSubmit())}>
          <FormGroup>
            <Col sm={12}>
              <h2>Sign Up</h2>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <h4>Email</h4>
            </Col>
            <Col sm={12}>
              <FormControl {...email} type="email" placeholder="Email" />
            </Col>
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <h4>Password</h4>
            </Col>
            <Col sm={12}>
              <FormControl {...password} type="password" placeholder="Password" />
            </Col>
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <h4>Confirm Password</h4>
            </Col>
            <Col sm={12}>
              <FormControl {...passwordConfirm} type="password" placeholder="Confirm Password" />
            </Col>
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </FormGroup>

          {this.renderAlert()}
          <ButtonGroup vertical block>
            <Button type="submit" style={styles.baseButtonStyle}>Sign In</Button>
          </ButtonGroup>
        </Form>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, { signupUser })(Signup);
