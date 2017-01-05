import * as React from 'react';
import {Provider} from "react-redux";

import store from './store';
import AddTodo from './components/AddTodo';

const Todo = () => (
  <Provider store={store}>
    <div className="container">
      <AddTodo/>
    </div>
  </Provider>
);

export default Todo;