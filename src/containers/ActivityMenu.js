import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchActivities, openActivityModal } from '../actions/index';

class ActivityMenu extends Component {
  componentWillMount() {
    this.props.fetchActivities();
  }

  handleClick() {
    this.props.openActivityModal();
  }

  renderMenuItems() {
    return this.props.activities.map((activity) =>
      <div className="activity-item" key={activity.id} onClick={() => this.handleClick()}>
        <div className="activity-letter">{activity.type.charAt(0).toUpperCase()}</div>
        <div className="activity-word">{activity.type}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="activity-menu">
        {this.renderMenuItems()}
      </div>
    );
  }
}

ActivityMenu.propTypes = {
  fetchActivities: PropTypes.func.isRequired,
  openActivityModal: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { activities: state.activities.all };
}

export default connect(mapStateToProps, { openActivityModal, fetchActivities })(ActivityMenu);
