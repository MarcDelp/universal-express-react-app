'use strict';

module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "rules": {
    "semi": "error"
  }
};
