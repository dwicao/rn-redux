import * as types from '../actions/types';

const todosReducer = (state = [], action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todosReducer;
