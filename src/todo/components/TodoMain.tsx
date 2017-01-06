import * as React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodoForm from '../containers/AddTodoForm';

const TodoMain = () => (
  <main>
    <AddTodoForm />
    <VisibleTodoList />
  </main>
);

export default TodoMain;
