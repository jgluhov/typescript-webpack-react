///<reference path="../interfaces.d.ts" />

import * as Constants from '../constants';

const todo = (state = {}, action: Actions.IAddTodo) => {
  switch (action.type) {
    case Constants.Actions.ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      };
    case Constants.Actions.TOGGLE_TODO:
      const todo = state as Data.ITodo;

      if(todo.id !== action.payload.id) {
        return todo;
      }

      return Object.assign({}, todo, {
        completed: !todo.completed
      });

    default:
      return state;
  }
};

const todos = (state = [], action: Actions.IAddTodo) => {
  switch (action.type) {
    case Constants.Actions.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case Constants.Actions.TOGGLE_TODO:
      return state.map((t: Data.ITodo) => todo(t, action));
    default:
      return state;
  }
};

export default todos;
