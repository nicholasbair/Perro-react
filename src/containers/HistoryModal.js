import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { closeHistoryModal } from '../actions/index';
import styles from './styles';
// import { reduxForm } from 'redux-form';
import {
  Modal,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Col,
  Checkbox,
  FormControl } from 'react-bootstrap';

class HistoryModal extends Component {
  postActivity() {
    console.log('post activity button pressed');
  }

  cancelModal() {
    this.props.closeHistoryModal();
  }

  render() {
    // const { fields: { participants, assessment, duration, notes }, handleSubmit } = this.props;
    const props = this.props;
    console.log(props);

    return (
      <div className="activity-modal">
        <Modal
          aria-labelledby="modal-label"
          style={styles.modalStyle}
          backdropStyle={styles.backdropStyle}
          show={this.props.showHistoryModal}
          onHide={this.close}
        >
          <div style={styles.dialogStyle}>
            <Col xs={2} style={styles.noPad}>
              <img className="activity-icon" src="http://placehold.it/50x50" alt="activity icon"></img>
            </Col>
            <Col xs={10}>
              <h2 id="modal-label" className="activity-label">Add a walk</h2>
            </Col>
              <Form horizontal >
                {/*onSubmit={handleSubmit(this.props.postActivity)}*/}

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
                  <Button style={styles.baseButtonStyle} onClick={() => this.postActivity()}>Add my walk!</Button>
                  <Button style={styles.cancelButtonStyle} onClick={() => this.cancelModal()}>Cancel</Button>
                </ButtonGroup>

              </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

// TODO: add form validation
// function validate(values) {
//   const errors = {};
//
//   if (!values.participants) {
//     errors.participants = 'Select a participant';
//   }
//
//   return errors;
// }

// TODO: enable reduxForm
// export default reduxForm({
//   form: 'ActivityModalForm',
//   fields: ['participants', 'assessment', 'duration', 'notes']
// }, null, { postActivity })(ActivityModal);

function mapStateToProps(state) {
  return { showHistoryModal: state.history.showHistoryModal };
}

export default connect(mapStateToProps, { closeHistoryModal })(HistoryModal);

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ postActivity }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(ActivityModal);
