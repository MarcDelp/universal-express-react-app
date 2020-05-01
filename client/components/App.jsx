'use strict';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from '../routes';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        { routes }
      </BrowserRouter>
    );
  }
}
