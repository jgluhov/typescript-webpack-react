import { throttle } from 'lodash';
import {
  createStore,
  applyMiddleware
} from 'redux';
import * as createLogger from 'redux-logger';
import {
  loadState,
  saveState
} from './localStorage';

import todoApp from '../reducers';

const logger = createLogger();
const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState,
  applyMiddleware(logger),
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

export default store;
