import React, { Component, PropTypes } from 'react';

export default class HistoryItem extends Component {
  render() {
    let desc;
    const dog = this.props.dog;
    const duration = this.props.duration;

    switch (this.props.activityType) {
      case 'walk':
        desc = `Nick walked ${dog} for ${duration} minutes.`;
        break;

      case 'run':
        desc = `Nick ran with ${dog} for ${duration} minutes.`;
        break;

      case 'park':
        desc = `Nick took ${dog} to the park for ${duration} minutes.`;
        break;

      case 'meal':
        desc = `Nick fed ${dog}.`;
        break;

      case 'vet':
        desc = `Nick took ${dog} to the vet.`;
        break;

      default:
        break;
    }

    return (
      <div className="history-item" onClick={() => this.props.openModalHistory(this.props.activityId)}>
        <img className="user-avatar" src="./public/img/user.jpg" alt="user avatar"></img>
        {desc}
      </div>
    );
  }
}

HistoryItem.propTypes = {
  openModalHistory: PropTypes.func.isRequired,
  activityType: PropTypes.string.isRequired,
  dog: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  activityId: PropTypes.number.isRequired
};
