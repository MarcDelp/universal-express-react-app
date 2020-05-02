'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackBaseConfig = require('./webpack.config.base');

module.exports = Object.assign({}, webpackBaseConfig, {
  entry: path.join(process.cwd(), 'src', 'client', 'index.js'), // the entrypoint of our build

  output: { // where to put the bundled file
    path: path.join(process.cwd(), 'dist', 'client'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({ // copy our favicon and our html index in the dist folder and update the html index to use the generated JS script
      favicon: path.join(process.cwd(), 'src', 'client', 'static', 'favicon.ico'),
      filename: 'index.ejs',
      template: `raw-loader!${path.join(process.cwd(), 'src', 'index.ejs')}`
    })
  ]
});
