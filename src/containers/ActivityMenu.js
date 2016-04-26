import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActivities, openActivity } from '../actions/index';
import ActivityItem from '../components/ActivityItem';

class ActivityMenu extends Component {
  componentWillMount() {
    this.props.fetchActivities();
  }

  handleClick() {
    this.props.openActivity();
  }

  renderMenuItems() {
    return this.props.activities.map((activity) => {
      return (
        <ActivityItem
          key={activity.id}
          handleClick={this.handleClick.bind(this)}
        />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openActivity, fetchActivities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityMenu);
