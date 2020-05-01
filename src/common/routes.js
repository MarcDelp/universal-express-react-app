'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../client/components/Home';
import NotFoundPage from '../client/components/NotFoundPage';

const routes = (
  <Switch>
    <Route
      exact
      path="/"
      component={Home}
    />

    <Route
      path="*"
      component={NotFoundPage}
    />
  </Switch>
);

export default routes;
