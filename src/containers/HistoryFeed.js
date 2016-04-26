import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions/index';
import HistoryItem from '../components/HistoryItem';

class HistoryFeed extends Component {
  componentWillMount() {
    this.props.fetchHistory();
  }

  renderHistoryItems() {
    return this.props.history.map((item) => {
      return (
        <HistoryItem
          key={item.id}
          type={item.type}
          participants={item.participants}
          duration={item.duration}
        />
      );
    });
  }

  render() {
    const props = this.props;
    console.log(props);

    return (
      <div className="history-feed">
        <div className="history-feed-title">
          <h3>Recent Activity</h3>
        </div>
        {this.renderHistoryItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { history: state.history.all };
}

export default connect(mapStateToProps, { fetchHistory })(HistoryFeed);
