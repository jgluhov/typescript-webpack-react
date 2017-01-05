///<reference path="../interfaces.d.ts" />
import '../styles/todo.css';
import * as React from 'react';

class Todo extends React.Component<Todo.IProps, {}> {
  constructor() {
    super();
  }
  render() {
    return (
      <li
        className="list-group-item"
        onClick={this.props.onToggle.bind(this)}
      >{this.props.todo.text}</li>
    )
  }
}

export default Todo;