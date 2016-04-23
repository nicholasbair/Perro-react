import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import NavBarInstance from './NavBarInstance';
import ActivityMenu from './ActivityMenu';
import DogCard from './DogCard';
import HistoryFeed from './HistoryFeed';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarInstance />
        <Grid fluid>
          <ActivityMenu />
          <Row>
            <DogCard />
          </Row>
          <HistoryFeed />
        </Grid>
      </div>
    );
  }
}
