import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

export default class HistoryFeed extends Component {
  render() {
    return (
      <div className="history-feed">
        <HistoryItem />
      </div>
    );
  }
}
