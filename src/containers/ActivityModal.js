import React, { Component, PropTypes } from 'react';
import { closeActivityModal, fetchDogs, postActivity } from '../actions/index';
import styles from '../../style/styles';
import { reduxForm } from 'redux-form';
import {
  Modal,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Col,
  Radio,
  FormControl
} from 'react-bootstrap';

class ActivityModal extends Component {
  componentWillMount() {
    this.props.fetchDogs();
  }

  cancelModal() {
    this.props.closeModal();
  }

  renderDogRadios() {
    const { fields: { participants } } = this.props;

    return this.props.dogs.map((dog) =>
      <Radio
        inline
        key={dog.id}
        value={dog.id}
        checked={participants.value === dog.id}
        {...participants}
      >
        {dog.name}
      </Radio>
    );
  }

  render() {
    const { fields: { assessment, duration, notes }, handleSubmit } = this.props;

    return (
      <div className="activity-modal">
        <Modal
          aria-labelledby="modal-label"
          style={styles.modalStyle}
          backdropStyle={styles.backdropStyle}
          show={this.props.showModal}
          onHide={this.close}
        >
          <div style={styles.dialogStyle}>
            <Col xs={2} style={styles.noPad}>
              <img className="activity-icon" src="http://placehold.it/50x50" alt="activity icon"></img>
            </Col>
            <Col xs={10}>
              <h2 id="modal-label" className="activity-label">Add a walk</h2>
            </Col>
            <Form horizontal onSubmit={handleSubmit(this.props.postActivity)}>

              <FormGroup>
                <h3>Who did you walk?</h3>
                {this.renderDogRadios()}
              </FormGroup>

              <FormGroup>
                <h3>How did it go?</h3>
                <Radio inline checked={assessment.value === 'Ok'} {...assessment}>
                  Ok
                </Radio>
                {' '}
                <Radio inline checked={assessment.value === 'Good'} {...assessment}>
                  Good
                </Radio>
                {' '}
                <Radio inline checked={assessment.value === 'Great'} {...assessment}>
                  Great
                </Radio>
              </FormGroup>

              <FormGroup controlId="formHorizontalNotes">
                <Col sm={12}>
                  <h3>How long did you walk (minutes)?</h3>
                </Col>
                <Col sm={12}>
                  <FormControl type="duration" placeholder="Length" {...duration} />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalNotes">
                <Col sm={12}>
                  <h3>Any notes?</h3>
                </Col>
                <Col sm={12}>
                  <FormControl type="notes" placeholder="Notes" {...notes} />
                </Col>
              </FormGroup>

              <ButtonGroup vertical block>
                <Button type="submit" style={styles.baseButtonStyle}>
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
  closeModal: PropTypes.func.isRequired,
  fetchDogs: PropTypes.func.isRequired,
  postActivity: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
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

function mapStateToProps(state) {
  return {
    showModal: state.activities.showModal,
    dogs: state.activities.dogs
  };
}

export default reduxForm({
  form: 'ModalForm',
  fields: ['participants', 'assessment', 'duration', 'notes']
}, mapStateToProps, { postActivity, closeActivityModal, fetchDogs })(ActivityModal);
