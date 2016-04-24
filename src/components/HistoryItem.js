import React, { Component } from 'react';

export default class HistoryItem extends Component {
  render() {
    return (
      <div className="history-item">
        <img className="user-avatar" src="http://placehold.it/50x50" alt="user avatar"></img>
        Nick walked Rocko for 20 minutes
      </div>
    );
  }
}
