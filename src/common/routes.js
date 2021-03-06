'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime';

import Home from '../client/components/Home';
import NotFoundPage from '../client/components/NotFoundPage';

/**
 * A few routes for our application to display different components according
 * to the path
 */
const routes = (
  <Switch>
    <Route
      exact
      path="/"
      component={Home}
    />

    <Route
      path="*"
      render={(props) => {
        if (props.staticContext) { // staticContext does not exists in the client
          props.staticContext.status = 404;
        }

        return <NotFoundPage/>;
      }}
    />
  </Switch>
);

export default routes;
