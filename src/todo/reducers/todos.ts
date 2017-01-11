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

const filterKey = (filter: string) => {
  const filtered = Constants.TODO_FILTERS.filter((f: IFilter) => f.text === filter);
  return filtered.length ? filtered.pop().filter : Constants.FILTER_ALL;
};

export const filterTodos = (todos: ITodo[], filter: string): ITodo[] => {
  const filterType = filterKey(filter);

  switch (filterType) {
    case Constants.FILTER_ALL:
      return todos;
    case Constants.FILTER_COMPLETED:
      return todos.filter((todo: ITodo) => todo.completed);
    case Constants.FILTER_ACTIVE:
      return todos.filter((todo: ITodo) => !todo.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};
