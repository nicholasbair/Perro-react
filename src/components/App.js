import React, { Component } from 'react';
import TopNav from './TopNav';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}
