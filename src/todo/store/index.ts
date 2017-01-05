import {
  createStore,
  applyMiddleware
} from 'redux';
import * as createLogger from 'redux-logger';

import todoApp from '../reducers';

const logger = createLogger();

const store = createStore(
  todoApp,
  applyMiddleware(logger)
);

export default store;
