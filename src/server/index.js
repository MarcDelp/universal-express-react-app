'use strict';

import express from 'express';
import path from 'path';

import renderer from './renderer';

// Create a new express app
const app = new express();

// Configure the server to use ejs as engine to render views
app.set('view engine', 'ejs');
// Configure the directory where the views are stored
app.set('views', path.join(process.cwd(), 'dist', 'client'));

// Configure the directory from where to serve static files
app.use(express.static(path.join(process.cwd(), 'dist', 'client')));

// Use server side rendering
app.use('/', renderer);

// Run the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
