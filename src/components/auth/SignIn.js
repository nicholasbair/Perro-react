import React, { Component, PropTypes } from 'react';
import { signinUser } from '../../actions/auth';
import styles from '../../../style/styles';
import { reduxForm } from 'redux-form';
import {
  Col,
  Form,
  FormGroup,
  FormControl,
  ButtonGroup,
  Button
} from 'react-bootstrap';

class Signin extends Component {
  handleFormSubmit() {
    const { email, password } = this.props.values;
    this.props.signinUser({ email, password });
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
    const { fields: { email, password }, handleSubmit } = this.props;

    return (
      <div className="signin-form-container">
        <Form className="signin-form" onSubmit={handleSubmit(() => this.handleFormSubmit())}>
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
              <FormControl {...email} type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <h4>Password</h4>
            </Col>
            <Col sm={12}>
              <FormControl {...password} type="password" placeholder="Password" />
            </Col>
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

Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, { signinUser })(Signin);
