import React from 'react';
import { Route, Switch } from 'react-router';

import App from './components/App/App';

export default (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
);
