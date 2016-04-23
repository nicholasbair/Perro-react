import React, { Component } from 'react';
import PerroNav from './PerroNav';
import ActivityMenu from './ActivityMenu';
import DogCard from './DogCard';
import HistoryFeed from './HistoryFeed';

export default class App extends Component {
  render() {
    return (
      <div>
        <PerroNav />
        <ActivityMenu />
        <DogCard />
        <HistoryFeed />
      </div>
    );
  }
}
