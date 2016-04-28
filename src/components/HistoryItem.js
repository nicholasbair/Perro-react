import React, { Component } from 'react';

export default class HistoryItem extends Component {
  onUserClick() {
    this.props.handleClick();
  }

  render() {
    const type = this.props.type;
    const participant = this.props.participants[0];
    const dog = this.props.participants[1];
    const duration = this.props.duration;

    const desc = `${participant} ${type}ed ${dog} for ${duration} minutes.`;

    return (
      <div className="history-item" onClick={() => this.onUserClick()}>
        <img className="user-avatar" src="http://placehold.it/50x50" alt="user avatar"></img>
        {desc}
      </div>
    );
  }
}
