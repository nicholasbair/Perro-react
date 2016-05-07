import React, { Component, PropTypes } from 'react';

export default class HistoryItem extends Component {
  render() {
    let desc;
    const dog = this.props.dog;
    const value = this.props.value;

    switch (this.props.activityType) {
      case 'walk':
        desc = `Nick walked ${dog} for ${value} minutes.`;
        break;

      case 'run':
        desc = `Nick ran with ${dog} for ${value} minutes.`;
        break;

      case 'park':
        desc = `Nick took ${dog} to the park for ${value} minutes.`;
        break;

      case 'meal':
        desc = `Nick fed ${dog} ${value} cups of food.`;
        break;

      case 'vet':
        desc = `Nick took ${dog} to the vet ($${value}).`;
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
  value: PropTypes.number.isRequired,
  activityId: PropTypes.string.isRequired
};
