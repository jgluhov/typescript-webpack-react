///<reference path="../interfaces.d.ts" />

import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import filters from './filters';

const todoApp = combineReducers<IAppState>({
  todos,
  filter,
  filters,
});

export default todoApp;
