import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { authenticate } from '../../actions/index';
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

class SignIn extends Component {
  // static contextTypes = {
  //   router: React.PropTypes.object
  // };

  // componentWillUpdate(nextProps) {
  //   if (nextProps.authenticated) {
  //     this.context.router.push('/app');
  //   }
  // }

  // authButton() {
  //   if (!this.props.authenticated) {
  //     return (
  //       <Button
  //         style={styles.baseButtonStyle}
  //         onClick={() => this.props.authenticate(true)}
  //       >
  //         Sign In
  //       </Button>
  //     );
  //   }
  // }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <div className="signin-form-container">
        <Form className="signin-form" onSubmit={() => this.handleFormSubmit()}>
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
              <FormControl {...email} className="" type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <h4>Password</h4>
            </Col>
            <Col sm={12}>
              <FormControl {...password} className="" type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <ButtonGroup vertical block>
            {/*{this.authButton()}*/}
            <Button type="submit" style={styles.baseButtonStyle}>Sign In</Button>
          </ButtonGroup>
        </Form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { authenticated: state.authenticated };
// }
//
// export default connect(mapStateToProps, { authenticate })(SignIn);

export default reduxForm({
  form: 'SignIn',
  fields: ['email', 'password']
})(SignIn);
