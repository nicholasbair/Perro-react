import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postActivity } from '../actions/index';
import styles from './styles';
import {
  Modal,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Col,
  FormControl
} from 'react-bootstrap';

class ActivityModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // this.props.postActivity
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="activity-modal">
        <Button onClick={this.open}>
          Open Modal
        </Button>

        <Modal
          aria-labelledby="modal-label"
          style={styles.modalStyle}
          backdropStyle={styles.backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
          <div style={styles.dialogStyle}>
            <Col xs={2} style={styles.noPad}>
              <img className="activity-icon" src="http://placehold.it/50x50" alt="activity icon"></img>
            </Col>
            <Col xs={10}>
              <h2 id="modal-label" className="activity-label">Add a walk</h2>
            </Col>
            <Form horizontal onSubmit={this.onSubmit}>

              <ButtonGroup justified>
                <h3>Who did you walk?</h3>
                <Button style={styles.buttonJustifiedStyle}>Rocko</Button>
                <Button style={styles.buttonJustifiedStyle}>Sasha</Button>
                <Button style={styles.buttonJustifiedStyle}>Rocko</Button>
              </ButtonGroup>

              <ButtonGroup justified>
                <h3>How did it go?</h3>
                <Button style={styles.buttonJustifiedStyle}>Ok</Button>
                <Button style={styles.buttonJustifiedStyle}>Good</Button>
                <Button style={styles.buttonJustifiedStyle}>Great</Button>
              </ButtonGroup>

              <FormGroup controlId="formHorizontalNotes">
                <Col sm={12}>
                  <h3>How long did you walk (minutes)?</h3>
                </Col>
                <Col sm={12}>
                  <FormControl type="length" placeholder="Length" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalNotes">
                <Col sm={12}>
                  <h3>Any notes?</h3>
                </Col>
                <Col sm={12}>
                  <FormControl type="notes" placeholder="Notes" />
                </Col>
              </FormGroup>

              <ButtonGroup vertical block>
                <Button style={styles.baseButtonStyle}>Add my walk!</Button>
              </ButtonGroup>

            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postActivity }, dispatch);
}

export default connect(null, mapDispatchToProps)(ActivityModal);
