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
      // let activityType = this.props.type;
      // const participant = this.props.participants[0];
      // const dog = this.props.participants[1];
      // const duration = this.props.duration;

      // const desc = `${participant} ${type}ed ${dog} for ${duration} minutes.`;

      <div className="history-item" onClick={() => this.props.openModal()}>
        <img className="user-avatar" src="http://placehold.it/50x50" alt="user avatar"></img>
        {item.participant} {item.type} {item.particants} for {item.duration}.
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
