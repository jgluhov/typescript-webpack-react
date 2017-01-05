///<reference path="../interfaces.d.ts" />

import {
  ADD_TODO
} from '../constants';

const todo = (state = {}, action: Actions.ITodo) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      };
    default:
      return state;
  }
};

const todos = (state = [], action: Actions.ITodo) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    default:
      return state;
  }
};

export default todos;
