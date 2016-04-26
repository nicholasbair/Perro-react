import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActivities } from '../actions/index';
import ActivityItem from '../components/ActivityItem';

class ActivityMenu extends Component {
  componentWillMount() {
    this.props.fetchActivities();
  }

  renderMenuItems() {
    return this.props.activities.map((activity) => {
      return (
        <ActivityItem key={activity.id} />
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

function mapStateToProps(state) {
  return { activities: state.activities.all };
}

export default connect(mapStateToProps, { fetchActivities })(ActivityMenu);
