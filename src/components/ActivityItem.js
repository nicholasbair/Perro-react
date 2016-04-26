import React, { Component } from 'react';

export default class ActivityItem extends Component {
  onUserClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div className="activity-item">
        <img onClick={this.onUserClick.bind(this)} className="activity-icon" src="http://placehold.it/50x50" alt="activity icon"></img>
      </div>
    );
  }
}
