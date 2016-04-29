import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { closeActivityModal, fetchDogs } from '../actions/index';
import styles from '../../style/styles';
// import { reduxForm } from 'redux-form';
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
  componentWillMount() {
    this.props.fetchDogs();
  }

  cancelModal() {
    this.props.closeActivityModal();
  }

  renderDogButtons() {
    let width = 100 / this.props.dogs.length;
    let dogButtonStyle = {
      backgroundColor: 'rgba(57, 129, 203, 0.7)',
      border: '1px solid rgba(57, 129, 203, 0.7)',
      color: '#f5f6f6',
      width: `${width}%`
    };

    return this.props.dogs.map((dog) =>
      <Button key={dog.id} style={dogButtonStyle}>{dog.name}</Button>
    );
  }

  render() {
    // const { fields: { participants, assessment, duration, notes }, handleSubmit } = this.props;
    let buttonJustifiedStyle = {
      backgroundColor: 'rgba(57, 129, 203, 0.7)',
      border: '1px solid rgba(57, 129, 203, 0.7)',
      color: '#f5f6f6',
      width: '33%'
    };

    return (
      <div className="activity-modal">
        <Modal
          aria-labelledby="modal-label"
          style={styles.modalStyle}
          backdropStyle={styles.backdropStyle}
          show={this.props.showActivityModal}
          onHide={this.close}
        >
          <div style={styles.dialogStyle}>
            <Col xs={2} style={styles.noPad}>
              <img className="activity-icon" src="http://placehold.it/50x50" alt="activity icon"></img>
            </Col>
            <Col xs={10}>
              <h2 id="modal-label" className="activity-label">Add a walk</h2>
            </Col>
            <Form horizontal>
              {/*onSubmit={handleSubmit(this.props.postActivity)}*/}

              <ButtonGroup justified className="buttonStyles">
                <h3>Who did you walk?</h3>
                {this.renderDogButtons()}
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
                <Button
                  style={styles.baseButtonStyle}
                  onClick={() => this.postActivity()}
                >
                  Add my activity!
                </Button>
                <Button
                  style={styles.cancelButtonStyle}
                  onClick={() => this.cancelModal()}
                >
                  Cancel
                </Button>
              </ButtonGroup>

            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

ActivityModal.propTypes = {
  closeActivityModal: PropTypes.func.isRequired,
  fetchDogs: PropTypes.func.isRequired,
  showActivityModal: PropTypes.bool.isRequired,
  dogs: PropTypes.array.isRequired
};

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
  return {
    showActivityModal: state.activities.showActivityModal,
    dogs: state.activities.dogs
  };
}

export default connect(mapStateToProps, {
  closeActivityModal,
  fetchDogs
})(ActivityModal);

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ postActivity }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(ActivityModal);
