import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions/index';
import HistoryItem from '../components/HistoryItem';
import cx from 'classnames';

class HistoryFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false
    };
  }

  componentWillMount() {
    this.props.fetchHistory();
  }

  hideFeed() {
    this.setState({ isHidden: true });
  }

  showFeed() {
    this.setState({ isHidden: false });
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
    let historyClass = cx({
      'history-feed': !this.state.isHidden,
      'history-feed-hidden': this.state.isHidden
    });

    let historyHandle = cx({
      'history-handle': this.state.isHidden,
      'history-handle-hidden': !this.state.isHidden
    });

    let glyphiconLeft = {
      top: '7px',
      left: '7px'
    };

    let glyphiconRight = {
      fontSize: '0.75em',
      top: '0px',
      left: '7px'
    };

    return (
      <div className="history-feed-parent">
        <div className={historyHandle}>
          <span
            style={glyphiconLeft}
            className="glyphicon glyphicon-chevron-left"
            onClick={() => this.showFeed()}
          >
          </span>
        </div>
        <div className={historyClass}>
          <div className="history-feed-title">
            <h3>Recent Activity
              <span
                style={glyphiconRight}
                className="glyphicon glyphicon-chevron-right"
                onClick={() => this.hideFeed()}
              >
              </span>
            </h3>
          </div>
          {this.renderHistoryItems()}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { history: state.history.all };
}

export default connect(mapStateToProps, { fetchHistory })(HistoryFeed);
