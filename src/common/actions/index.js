'use strict';

const action = (type, payload = {}) => ({
  type,
  ...payload
});

export const getTexts = () => action('API/GET_TEXT', {
  texts: ['Some text', 'Some more text', 'A third text']
});
