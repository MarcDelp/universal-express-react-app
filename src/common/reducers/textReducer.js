'use strict';

const initialState = { texts: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'API/GET_TEXT':
      return {
        texts: action.texts
      };
    default:
      return state;
  }
};
