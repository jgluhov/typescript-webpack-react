import * as React from 'react';

import TodoListComponent from '../components/todos-list/todos-list.component';
import TodoInputComponent from './todo-input.component';

class MainComponent extends React.Component
  <IMainComponent.Props, IMainComponent.State> {

  render() {
    return (
      <main>
        <TodoInputComponent />
        <TodoListComponent filter={this.props.filter} />
      </main>
    );
  }
}

export default MainComponent;
