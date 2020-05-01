'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'src', 'client', 'index.js'),

  output: {
    path: path.join(process.cwd(), 'dist', 'client'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /src\/.*jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      ]
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.join(process.cwd(), 'src', 'client', 'static', 'favicon.ico'),
      template: path.join(process.cwd(), 'src', 'client', 'static', 'index.html')
    })
  ]
};
