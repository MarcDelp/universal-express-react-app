'use strict';

import express from 'express';
import path from 'path';

import renderer from './renderer';

const app = new express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'dist', 'client'));

app.use(express.static(path.join(process.cwd(), 'dist', 'client')));

app.use('/', renderer);

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
