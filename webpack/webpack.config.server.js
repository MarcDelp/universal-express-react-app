'use strict';

const nodeExternals = require('webpack-node-externals');
const path = require('path');

const webpackBaseConfig = require('./webpack.config.base');

module.exports = Object.assign({}, webpackBaseConfig, {
  entry: path.join(process.cwd(), 'src', 'server', 'index.js'),

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'server.js'
  },

  devtool: 'inline-source-map',

  target: 'node', // the environment in which the server will run

  externals: [nodeExternals()] // to avoid bundling node_modules,
});
