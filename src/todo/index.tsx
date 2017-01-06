import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import {Provider} from "react-redux";

import store from './store';

import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';

const TodoApp = () => (
  <Provider store={store}>
    <div className="container">
      <TodoHeader/>
      <TodoMain />
      <TodoFooter />
    </div>
  </Provider>
);

export default TodoApp;