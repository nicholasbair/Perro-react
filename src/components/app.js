import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBarInstance from './NavBarInstance';
import ActivityMenu from '../containers/ActivityMenu';
import DogCard from './DogCard';
import HistoryFeed from '../containers/HistoryFeed';
import ActivityModal from '../containers/ActivityModal';
import HistoryModal from '../containers/HistoryModal';

export default class App extends Component {
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
        <NavBarInstance />
        <Grid fluid style={styles.fullHeight}>
          <Row style={styles.fullHeight}>
            <Col xs={1} style={styles.activityMenu}>
              <ActivityMenu />
            </Col>
            <Col xs={8} style={styles.fullHeight}>
              <Row>
                <DogCard />
              </Row>
            </Col>
            <Col xs={3} style={styles.historyFeed}>
              <HistoryFeed />
            </Col>
          </Row>
        </Grid>
        <ActivityModal />
        <HistoryModal />
      </div>
    );
  }
}
