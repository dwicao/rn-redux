import * as types from './types';

export const increaseCounter = (payload) => ({
  type: types.ADD_TODO,
  payload,
});
