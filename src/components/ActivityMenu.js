import React, { Component, PropTypes } from 'react';

export default class ActivityMenu extends Component {
  renderMenuItems() {
    return this.props.activities.map((activity) =>
      <div
        className="activity-item"
        key={activity._id}
        onClick={() => this.props.openActivityModal({ activityType: activity.type, formType: 'post' })}
      >
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
  openActivityModal: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired
};
