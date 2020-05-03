'use strict';

import { createStore, compose } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );

  return store;
}
