import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import App from './containers/App';
import SignIn from './components/auth/SignIn';
import RequireAuth from './components/RequireAuth';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/app" component={RequireAuth(App)} />
    <Route path="/signin" component={SignIn} />
  </Route>
);
