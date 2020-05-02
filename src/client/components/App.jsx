'use strict';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from '../../common/routes';

/**
 * A component that wraps the routes of the application in a Browser Router
 * that uses HTML5 history
 */
export default class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        { routes }
      </BrowserRouter>
    );
  }
}
