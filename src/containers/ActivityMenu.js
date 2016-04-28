import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActivities, openActivityModal } from '../actions/index';
import ActivityItem from '../components/ActivityItem';

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
        <ActivityItem
          key={activity.id}
          handleClick={() => this.handleClick(this)}
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

export default connect(mapStateToProps, { openActivityModal, fetchActivities })(ActivityMenu);
