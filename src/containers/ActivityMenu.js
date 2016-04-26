import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActivity } from '../actions/index';
import { bindActionCreators } from 'redux';
import ActivityItem from '../components/ActivityItem';

class ActivityMenu extends Component {
  // renderMenu() {
  //   return this.props.activities.map((activity) => {
  //     return (
  //       <ActivityItem
  //         key={activity.activity}
  //         onClick={() => this.props.logActivity(activity)}
  //       />
  //     );
  //   });
  // }

  render() {
    return (
      <div className="activity-menu">
        {/*{this.renderMenu()}*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activities: state.activities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logActivity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityMenu);
