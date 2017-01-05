///<reference path="../interfaces.d.ts"/>

import * as React from 'react';
import * as Redux from 'react-redux';

class TodoList extends React.Component<TodoList.IProps, TodoList.IState> {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <ul>
            {this.props.todos.map((todo: Data.ITodo) => <li>{todo.text}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => ({
    todos: [...state.todos]
  }),
  () => ({})
)(TodoList);
