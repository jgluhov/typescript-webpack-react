///<reference path="../interfaces.d.ts" />

import * as Constants from '../constants';

const todo = (state = {}, action: Actions.ICreateTodo) => {
  const todo = state as ITodo;

  switch (action.type) {
    case Constants.Actions.CREATE_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      };
    case Constants.Actions.TOGGLE_TODO:
      if(todo.id !== action.payload.id) {
        return todo;
      }
      return Object.assign({}, todo, {
        completed: !todo.completed
      });
    case Constants.Actions.REMOVE_TODO:
      return todo.id !== action.payload.id;
    default:
      return state;
  }
};

const todos = (state = [], action: Actions.ICreateTodo) => {
  switch (action.type) {
    case Constants.Actions.CREATE_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case Constants.Actions.TOGGLE_TODO:
      return state.map((t: ITodo) => todo(t, action));
    case Constants.Actions.REMOVE_TODO:
      return state.filter((t: ITodo) => todo(t, action));
    default:
      return state;
  }
};

export default todos;
