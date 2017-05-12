import * as types from './types';

export const increaseCounter = (payload) => ({
  type: types.INCREASE_COUNTER,
  payload,
});
