///<reference path="../interfaces.d.ts" />
import Helpers from '../helpers';
import * as Constants from '../constants';

export const addTodo = (text: string): Actions.IAddTodo => {
  return {
    type: Constants.Actions.ADD_TODO,
    payload: {
      id: Helpers.uuid(),
      text
    }
  }
};

export const toggleTodo = (id: string): Actions.IToggleTodo => {
  return {
    type: Constants.Actions.TOGGLE_TODO,
    payload: {
      id
    }
  }
};

export const filterTodos = (filter: TODOS_FILTER): Actions.IFilterTodos => {
  return {
    type: Constants.Actions.FILTER_TODOS,
    payload: {
      filter
    }
  }
};
