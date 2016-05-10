import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import ActivityMenu from '../components/ActivityMenu';
import DogCard from '../components/DogCard';
import HistoryFeed from '../components/HistoryFeed';
import ActivityModal from './ActivityModal';
import DogModal from './DogModal';
import {
  openActivityModal,
  fetchHistoryItem,
  closeActivityModal
} from '../actions/index';
import { openDogModal, closeDogModal, fetchDog } from '../actions/dogs';

class DogApp extends Component {
  pullActivityDuration(name) {
    let data = this.props.history;
    let durations = [];
    let activities = ['walk', 'run', 'park'];
    data.forEach((item) => {
      if (item.participant === name && activities.includes(item.type)) {
        durations.push(item.value);
      }
    });

    if (durations.length > 30) {
      return durations.slice(durations.length - 30, durations.length);
    }

    return durations;
  }

  renderDogCards() {
    return this.props.dogs.map((dog) =>
      <DogCard
        key={dog._id}
        dogId={dog._id}
        name={dog.name}
        tagline={dog.tagline}
        img={dog.img}
        fetchDog={this.props.fetchDog}
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
        <Grid fluid style={styles.fullHeight}>
          <Row style={styles.fullHeight}>
            <Col xs={1} style={styles.activityMenu}>
              <ActivityMenu
                activities={this.props.activities}
                openActivityModal={this.props.openActivityModal}
                openDogModal={this.props.openDogModal}
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
                fetchHistoryItem={this.props.fetchHistoryItem}
              />
            </Col>
          </Row>
        </Grid>
        <ActivityModal
          closeActivityModal={this.props.closeActivityModal}
          dogs={this.props.dogs}
        />
        <DogModal
          closeDogModal={this.props.closeDogModal}
        />
      </div>
    );
  }
}

DogApp.propTypes = {
  openActivityModal: PropTypes.func.isRequired,
  fetchHistoryItem: PropTypes.func.isRequired,
  closeActivityModal: PropTypes.func.isRequired,
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

export default connect(mapStateToProps,
  { openActivityModal,
    fetchHistoryItem,
    closeActivityModal,
    fetchDog,
    openDogModal,
    closeDogModal
  })(DogApp);
