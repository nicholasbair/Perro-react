import React, { Component, PropTypes } from 'react';
import { postActivity } from '../actions/index';
import styles from '../../style/styles';
import { reduxForm } from 'redux-form';
import uuid from 'uuid-v4';
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
  onPostActivity() {
    let data = this.props.values;
    data.id = uuid();
    data.type = this.props.activityType;
    data.duration = parseInt(data.duration, 10);

    if (data.notes === undefined) {
      data.notes = '';
    }

    this.props.postActivity(data);
    this.props.closeModal();
    this.props.resetForm();
  }

  cancelModal() {
    this.props.closeModal();
    this.props.resetForm();
  }

  renderDogRadios() {
    const { fields: { participant } } = this.props;

    return this.props.dogs.map((dog) =>
      <Radio
        inline
        key={dog.id}
        {...participant}
        value={dog.name}
        checked={participant.value === dog.name}
      >
        {dog.name}
      </Radio>
    );
  }

  render() {
    const {
      fields: { participant, assessment, duration, notes },
      handleSubmit,
      activityType
    } = this.props;

    let title;
    let participantLabel;
    let durationLabel;

    switch (activityType) {
      case 'walk':
        title = 'Add a walk';
        participantLabel = 'Who did you walk?';
        durationLabel = 'How long did you walk (minutes)?';
        break;
      case 'run':
        title = 'Add a run';
        participantLabel = 'Who did you take for a run?';
        durationLabel = 'How long did you run (minutes)?';
        break;
      case 'park':
        title = 'Add a visit to the park';
        participantLabel = 'Who did you take with you?';
        durationLabel = 'How long did you stay (minutes)?';
        break;
      case 'meal':
        title = 'Add a meal';
        participantLabel = 'Who did you feed?';
        durationLabel = 'How long did they eat (minutes)?';
        break;
      case 'vet':
        title = 'Add a vet visit';
        participantLabel = 'Who did you take?';
        durationLabel = 'How long did you stay (minutes)?';
        break;
      default:
        break;
    }

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
              <h3 id="modal-label" className="activity-label">{title}</h3>
            </Col>
            <Form horizontal onSubmit={handleSubmit(() => this.onPostActivity())}>

              <FormGroup>
                <Col sm={12}>
                  <h4>{participantLabel}</h4>
                </Col>
                <Col sm={12}>
                  {this.renderDogRadios()}
                </Col>
                <Col sm={12}>
                  <div className="text-help">{participant.touched ? participant.error : ''}</div>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <h4>How did it go?</h4>
                </Col>
                <Col sm={12}>
                  <Radio
                    inline
                    {...assessment}
                    value="Ok"
                    checked={assessment.value === 'Ok'}
                  >
                    Ok
                  </Radio>
                  <Radio
                    inline
                    {...assessment}
                    value="Good"
                    checked={assessment.value === 'Good'}
                  >
                    Good
                  </Radio>
                  <Radio
                    inline
                    {...assessment}
                    value="Great"
                    checked={assessment.value === 'Great'}
                  >
                    Great
                  </Radio>
                </Col>
                <Col sm={12}>
                  <div className="text-help">{assessment.touched ? assessment.error : ''}</div>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <h4>{durationLabel}</h4>
                </Col>
                <Col sm={12}>
                  <FormControl
                    type="duration"
                    placeholder="Length"
                    {...duration}
                  />
                </Col>
                <Col sm={12}>
                  <div className="text-help">{duration.touched ? duration.error : ''}</div>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <h4>Any notes?</h4>
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
  postActivity: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  dogs: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  activityType: PropTypes.string
};

function validate(values) {
  const rx = new RegExp(/^\s*\d+\s*$/);
  const errors = {};

  if (!values.participant) {
    errors.participant = 'Select a dog';
  }

  if (!values.assessment) {
    errors.assessment = 'Select one';
  }

  if (!values.duration) {
    errors.duration = 'Enter a length';
  }

  if (values.duration && !rx.test(values.duration)) {
    errors.duration = 'Enter a number whole number';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    showModal: state.activities.modal.show,
    activityType: state.activities.modal.type,
    dogs: state.activities.dogs
  };
}

export default reduxForm({
  form: 'ModalForm',
  fields: ['participant', 'assessment', 'duration', 'notes'],
  validate
}, mapStateToProps, { postActivity })(ActivityModal);
