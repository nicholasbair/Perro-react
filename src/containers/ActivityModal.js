import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postActivity } from '../actions/index';
import {
  Modal,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Radio
} from 'react-bootstrap';


const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = {
  position: 'absolute',
  width: 400,
  border: '1px solid rgba(90, 85, 85, 0.9)',
  borderRadius: '4px',
  color: '#f5f6f6',
  backgroundColor: 'rgba(90, 85, 85, 0.9)',
  boxShadow: '0 5px 15px rgba(0,0,0,.5)',
  padding: 20
};

const baseButtonStyle = {
  backgroundColor: 'rgba(57, 129, 203, 0.7)',
  border: '1px solid rgba(57, 129, 203, 0.7)',
  color: '#f5f6f6'
};

const buttonJustifiedStyle = {
  ...baseButtonStyle,
  width: '33%'
};

const noPad = {
  paddingLeft: 0
}

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
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
          <div style={dialogStyle}>
            <Col xs={2} style={noPad}>
              <img className="activity-icon" src="http://placehold.it/50x50"></img>
            </Col>
            <Col xs={10}>
              <h2 id="modal-label" className="activity-label">Add a walk</h2>
            </Col>
            <Form horizontal onSubmit={this.onSubmit}>

              <ButtonGroup justified>
                <h3>Who did you walk?</h3>
                  <Button style={buttonJustifiedStyle}>Rocko</Button>
                  <Button style={buttonJustifiedStyle}>Sasha</Button>
                  <Button style={buttonJustifiedStyle}>Rocko</Button>
              </ButtonGroup>

              <ButtonGroup justified>
                <h3>How did it go?</h3>
                  <Button style={buttonJustifiedStyle}>Ok</Button>
                  <Button style={buttonJustifiedStyle}>Good</Button>
                  <Button style={buttonJustifiedStyle}>Great</Button>
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
                <Button style={baseButtonStyle}>Add my walk!</Button>
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
