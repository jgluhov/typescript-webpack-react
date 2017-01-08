///<reference path="../interfaces.d.ts" />
import Helpers from '../helpers';
import * as Constants from '../constants';

export const createTodo = (text: string): Actions.ICreateTodo => {
  return {
    type: Constants.Actions.CREATE_TODO,
    payload: {
      id: Helpers.uuid(),
      text
    }
  }
};

export const removeTodo = (id: string): Actions.IRemoveTodo => {
  return {
    type: Constants.Actions.REMOVE_TODO,
    payload: {
      id
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

export const filterTodos = (filter: TODO_FILTER_TYPE): Actions.IFilterTodos => {
  return {
    type: Constants.Actions.FILTER_TODOS,
    payload: {
      filter
    }
  }
};
