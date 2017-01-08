///<reference path="../interfaces.d.ts" />

import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import filter from './filter';
import filters from './filters';

const todoApp = combineReducers<IAppState>({
  todos,
  filter,
  filters,
});

export default todoApp;

export const filterTodos = (state: IAppState, filter: TODO_FILTER_TYPE) : ITodo[] =>
  fromTodos.filterTodos(state.todos, filter);


