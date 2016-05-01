import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { openModal, openModalHistory, closeModal } from '../actions/index';
import { Grid, Row, Col } from 'react-bootstrap';
import TopNav from '../components/TopNav';
import ActivityMenu from '../components/ActivityMenu';
import DogCard from '../components/DogCard';
import HistoryFeed from '../components/HistoryFeed';
import ActivityModal from './ActivityModal';

class App extends Component {
  pullActivityDuration(name) {
    let data = this.props.history;
    let durations = [];
    let activities = ['walk', 'run', 'park'];
    data.forEach((item) => {
      if (item.participant === name && activities.includes(item.type)) {
        durations.push(item.duration);
      }
    });

    return durations;
  }

  renderDogCards() {
    return this.props.dogs.map((dog) =>
      <DogCard
        key={dog.id}
        name={dog.name}
        tagline={dog.tagline}
        img={dog.img}
        durations={this.pullActivityDuration(dog.name)}
      />
    );
  }

  render() {
    const styles = {
      fullHeight: {
        height: '90vh'
      },
      activityMenu: {
        paddingLeft: 0,
        height: '90vh'
      },
      historyFeed: {
        paddingRight: 0,
        height: '90vh'
      }
    };

    return (
      <div>
        <TopNav />
        <Grid fluid style={styles.fullHeight}>
          <Row style={styles.fullHeight}>
            <Col xs={1} style={styles.activityMenu}>
              <ActivityMenu
                activities={this.props.activities}
                openModal={this.props.openModal}
              />
            </Col>
            <Col xs={8} style={styles.fullHeight}>
              <Row>
                {this.renderDogCards()}
              </Row>
            </Col>
            <Col xs={3} style={styles.historyFeed}>
              <HistoryFeed
                history={this.props.history}
                openModalHistory={this.props.openModalHistory}
              />
            </Col>
          </Row>
        </Grid>
        <ActivityModal
          closeModal={this.props.closeModal}
          dogs={this.props.dogs}
        />
      </div>
    );
  }
}

App.propTypes = {
  openModal: PropTypes.func.isRequired,
  openModalHistory: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
  activities: PropTypes.array.isRequired,
  dogs: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    history: state.activities.history,
    activities: state.activities.activityTypes,
    dogs: state.activities.dogs
  };
}

export default connect(mapStateToProps, { openModal, openModalHistory, closeModal })(App);
