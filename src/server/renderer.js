'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router } from 'express';
import { StaticRouter } from 'react-router-dom';

import routes from '../common/routes';

const router = Router();

router.get('*', async (req, res) => {
  try {
    const context = {};

    const htmlContent = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        { routes }
      </StaticRouter>
    );

    return res.render('index', {
      htmlContent
    });
  } catch(err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
});

export default router;
