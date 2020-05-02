'use strict';

module.exports = {
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
  }
};
