'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import routes from '../../common/routes';
import configureStore from '../../common/store';

const initialState = window.__REDUX_STATE__ || {};
const store = configureStore(initialState);

/**
 * A component that wraps the routes of the application in a Browser Router
 * that uses HTML5 history
 */
export default class AppRoutes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          { routes }
        </BrowserRouter>
      </Provider>
    );
  }
}
