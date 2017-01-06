import * as React from 'react';

import TodoListComponent from '../components/todos-list/todos-list.component';
import TodoInputComponent from './todo-input.component';

const MainComponent = () => (
  <main>
    <TodoInputComponent />
    <TodoListComponent />
  </main>
);

export default MainComponent;
