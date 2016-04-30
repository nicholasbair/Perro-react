import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class HistoryFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false
    };
  }

  hideFeed() {
    this.setState({ isHidden: true });
  }

  showFeed() {
    this.setState({ isHidden: false });
  }

  renderHistoryItems() {
    return this.props.history.map((item) =>
      <div className="history-item" key={item.id} onClick={() => this.props.openModal()}>
        <img className="user-avatar" src="http://placehold.it/50x50" alt="user avatar"></img>
        Nick {item.type}ed {item.participant} for {item.duration} minutes.
      </div>
    );
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

HistoryFeed.propTypes = {
  history: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired
};
