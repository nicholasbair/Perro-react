import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

export default class HistoryFeed extends Component {
  render() {
    return (
      <div className="history-feed">
        <div className="history-feed-title">
          <h3>Recent Activity</h3>
        </div>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </div>
    );
  }
}
