import React, { Component, PropTypes } from 'react';
import { postActivity, updateActivity, deleteHistoryItem } from '../actions/index';
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
  onPostActivity() {
    // Clean up data before sending to DB
    let data = this.props.values;
    data.type = this.props.activityType;
    data.value = parseInt(data.value, 10);

    if (data.notes === undefined) {
      data.notes = '';
    }

    if (this.props.formType === 'post') {
      this.props.postActivity(data);
    } else {
      this.props.updateActivity(data, this.props.formData._id);
    }

    this.props.closeActivityModal();
    this.props.destroyForm();
  }

  cancelModal() {
    this.props.closeActivityModal();
    this.props.destroyForm();
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
      initialValues,
      deleteHistoryItem
    } = this.props;

    let title;
    let titleStub = 'Add/update a';
    let takeStub = 'Who did you take'
    let participantLabel = `${takeStub}?`;
    let valueLabel;
    let valuePlaceholder = 'Length';

    switch (activityType) {
      case 'walk':
        title = `${titleStub} ${activityType}`;
        participantLabel = 'Who did you walk?';
        valueLabel = 'How long did you walk (minutes)?';
        break;
      case 'run':
        title = `${titleStub} ${activityType}`;
        participantLabel = `${takeStub} for a run?`;
        valueLabel = 'How long did you run (minutes)?';
        break;
      case 'park':
        title = 'Add/update a visit to the park';
        valueLabel = 'How long did you stay (minutes)?';
        break;
      case 'meal':
        title = 'Add/update a meal';
        participantLabel = 'Who did you feed?';
        valueLabel = 'How many cup(s) of food?';
        valuePlaceholder = 'Cups';
        break;
      case 'vet':
        title = 'Add/update a vet visit';
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
                  Add/update my activity!
                </Button>
                <Button
                  style={styles.cancelButtonStyle}
                  onClick={() => this.cancelModal()}
                >
                  Cancel
                </Button>
                {this.props.formType === 'update' ?
                  <Button
                    style={styles.deleteButtonStyle}
                    onClick={() => deleteHistoryItem(this.props.formData._id)}
                  >
                    <span className="glyphicon glyphicon-remove-circle"></span> Delete activity
                  </Button>
                : ''}
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
  postActivity: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  deleteHistoryItem: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  destroyForm: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  dogs: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  activityType: PropTypes.string,
  formData: PropTypes.object
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

function mapStateToProps(state) {
  return {
    showModal: state.activities.activityModal.show,
    activityType: state.activities.activityModal.activityType,
    initialValues: state.activities.activityModal.formData,
    formData: state.activities.activityModal.formData,
    formType: state.activities.activityModal.formType,
    dogs: state.activities.dogs
  };
}

export default reduxForm({
  form: 'ModalForm',
  fields: ['participant', 'assessment', 'value', 'notes'],
  validate
}, mapStateToProps, { postActivity, updateActivity, deleteHistoryItem })(ActivityModal);
