'use strict';

import { combineReducers } from 'redux';

import textReducer from './textReducer';

const allReducers = combineReducers({
  textReducer
});

export default allReducers;
