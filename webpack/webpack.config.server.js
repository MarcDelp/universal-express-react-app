'use strict';

const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'src', 'server', 'index.js'),

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'server.js'
  },

  devtool: 'inline-source-map',

  target: 'node',

  externals: [nodeExternals()],

  module: {
    rules: [{
      test: /src\/.*\.jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      ]
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
