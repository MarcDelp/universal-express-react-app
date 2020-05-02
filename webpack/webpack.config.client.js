'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'src', 'client', 'index.js'), // the entrypoint of our build

  output: { // where to put the bundled file
    path: path.join(process.cwd(), 'dist', 'client'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{ // use the babel-loader with 2 presets to transpile the application code
      test: /src\/.*\.jsx?$/, // only do it for files in the src folder which have a .js or .jsx extension
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

  resolve: { // when doing import statement resolve files with .js or .jsx extensions, even if the extension is not explicitly written
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({ // copy our favicon and our html index in the dist folder and update the html index to use the generated JS script
      favicon: path.join(process.cwd(), 'src', 'client', 'static', 'favicon.ico'),
      template: path.join(process.cwd(), 'src', 'client', 'static', 'index.html')
    })
  ]
};
