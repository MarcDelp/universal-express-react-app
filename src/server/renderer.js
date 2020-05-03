'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { Router } from 'express';
import { StaticRouter } from 'react-router-dom';

import routes from '../common/routes';
import configureStore from '../common/store';

const initialState = {};
const store = configureStore(initialState);

// Create a new express router to make the server side rendering
const router = Router();

router.get('*', async (req, res) => {
  try {
    const context = {};

    // Get the rendering for the request using a Static router for our routes
    const htmlContent = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          { routes }
        </StaticRouter>
      </Provider>
    );

    // In case our static context receives a status send the response with this status
    if (context.status) res.status(context.status);

    // Render the view and fill the template with corresponding info
    return res.render('index', {
      htmlContent,
      state: JSON.stringify(store.getState())
    });
  } catch(err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
});

export default router;
