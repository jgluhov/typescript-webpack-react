import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import {Provider} from "react-redux";

import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const TodoApp = () => (
  <Provider store={store}>
    <div className="container">
      <TodoList />
      <AddTodo />
    </div>
  </Provider>
);

export default TodoApp;