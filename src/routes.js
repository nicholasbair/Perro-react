import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import App from './containers/App';
import SignUp from './components/SignUp';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/app" component={App} />
    <Route path="/signup" component={SignUp} />
  </Route>
);
