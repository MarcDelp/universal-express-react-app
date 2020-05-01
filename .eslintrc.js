'use strict';

module.exports = {
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
