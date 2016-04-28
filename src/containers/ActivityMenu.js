import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchActivities, openActivityModal } from '../actions/index';

class ActivityMenu extends Component {
  componentWillMount() {
    this.props.fetchActivities();
  }

  handleClick() {
    this.props.openActivityModal();
  }

  renderMenuItems() {
    return this.props.activities.map((activity) => {
      return (
        <div className="activity-item" key={activity.id}>
          <img onClick={() => this.handleClick()} className="activity-icon" src="http://placehold.it/50x50" alt="activity icon"></img>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="activity-menu">
        {this.renderMenuItems()}
      </div>
    );
  }
}

ActivityMenu.propTypes = {
  fetchActivities: PropTypes.func.isRequired,
  openActivityModal: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { activities: state.activities.all };
}

export default connect(mapStateToProps, { openActivityModal, fetchActivities })(ActivityMenu);
