import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions/index';
import HistoryItem from '../components/HistoryItem';

class HistoryFeed extends Component {
  componentWillMount() {
    this.props.fetchHistory();
  }

  render() {
    const props = this.props;
    console.log(props);

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

export default connect(null, { fetchHistory })(HistoryFeed);
