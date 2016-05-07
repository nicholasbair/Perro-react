import React, { Component, PropTypes } from 'react';

export default class ActivityMenu extends Component {
  renderMenuItems() {
    return this.props.activities.map((activity) =>
      <div
        className="activity-item"
        key={activity._id}
        onClick={() => this.props.openModal(activity.type)}
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
  openModal: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired
};
