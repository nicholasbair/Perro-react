import React, { Component, PropTypes } from 'react';
import { postActivity } from '../actions/index';
import styles from '../../style/styles';
import { reduxForm, change } from 'redux-form';
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
    data.value = parseInt(data.value, 10);

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
        key={dog._id}
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
      fields: { participant, assessment, value, notes },
      handleSubmit,
      activityType,
      formData,
      changeFieldValue
    } = this.props;

    if (formData !== null) {
      changeFieldValue(notes, formData[0].notes);
    }

    let title;
    let participantLabel;
    let valueLabel;
    let valuePlaceholder;

    switch (activityType) {
      case 'walk':
        title = formData !== null ? 'Update a walk' : 'Add a walk';
        participantLabel = 'Who did you walk?';
        valueLabel = 'How long did you walk (minutes)?';
        valuePlaceholder = 'Length';
        break;
      case 'run':
        title = formData !== null ? 'Update a run' : 'Add a run';
        participantLabel = 'Who did you take for a run?';
        valueLabel = 'How long did you run (minutes)?';
        valuePlaceholder = 'Length';
        break;
      case 'park':
        title = formData !== null ? 'Update a visit to the park' : 'Add a visit to the park';
        participantLabel = 'Who did you take with you?';
        valueLabel = 'How long did you stay (minutes)?';
        valuePlaceholder = 'Length';
        break;
      case 'meal':
        title = formData !== null ? 'Update a meal' : 'Add a meal';
        participantLabel = 'Who did you feed?';
        valueLabel = 'How many cups of food?';
        valuePlaceholder = 'Cups';
        break;
      case 'vet':
        title = formData !== null ? 'Update a vet visit' : 'Add a vet visit';
        participantLabel = 'Who did you take?';
        valueLabel = 'How much did it cost?';
        valuePlaceholder = '$$$';
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
            <Col xs={1} className="modal-activity-letter">+</Col>
            <Col xs={11}>
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
                  <h4>{valueLabel}</h4>
                </Col>
                <Col sm={12}>
                  <FormControl
                    className="modal-input-length"
                    type="value"
                    placeholder={valuePlaceholder}
                    {...value}
                  />
                </Col>
                <Col sm={12}>
                  <div className="text-help">{value.touched ? value.error : ''}</div>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <h4>Any notes?</h4>
                </Col>
                <Col sm={12}>
                  <FormControl
                    type="notes"
                    placeholder="Notes"
                    {...notes}
                  />
                </Col>
              </FormGroup>

              <ButtonGroup vertical block>
                <Button type="submit" style={styles.baseButtonStyle}>
                  {formData !== null ? 'Update my activity!' : 'Add my activity!'}
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

  if (!values.value) {
    errors.value = 'Enter a length';
  }

  if (values.value && !rx.test(values.value)) {
    errors.value = 'Enter a number whole number';
  }

  return errors;
}

function changeFieldValue(field, value) {
  dispatch(change(form, field, value));
}

function mapStateToProps(state) {
  return {
    showModal: state.activities.modal.show,
    activityType: state.activities.modal.activityType,
    formData: state.activities.modal.formData,
    dogs: state.activities.dogs
  };
}

export default reduxForm({
  form: 'ModalForm',
  fields: ['participant', 'assessment', 'value', 'notes'],
  validate
}, mapStateToProps, { postActivity, changeFieldValue })(ActivityModal);
