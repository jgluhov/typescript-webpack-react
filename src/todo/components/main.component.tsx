import * as React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodoForm from '../containers/AddTodoForm';

const MainComponent = () => (
  <main>
    <AddTodoForm />
    <VisibleTodoList />
  </main>
);

export default MainComponent;
