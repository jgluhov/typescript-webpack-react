///<reference path="../interfaces.d.ts"/>

import * as React from 'react';
import * as Redux from 'react-redux';
import * as Constants from '../constants';

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

  public static filterTodos(todos: Data.ITodo[], filter: TodoList.TODOS_FILTER): Data.ITodo[] {
    switch (filter) {
      case Constants.FILTER_SHOW_ALL:
        return todos;
      case Constants.FILTER_SHOW_COMPLETED:
        return todos.filter((todo: Data.ITodo) => todo.completed);
      case Constants.FILTER_SHOW_ACTIVE:
        return todos.filter((todo: Data.ITodo) => !todo.completed);
      default:
        return todos;
    }
  }
}

export default Redux.connect(
  (state) => ({
    todos: TodoList.filterTodos(state.todos, state.filter)
  }),
  () => ({})
)(TodoList);
