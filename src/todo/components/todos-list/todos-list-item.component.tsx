///<reference path="../interfaces.d.ts" />
import '../styles/todo.css';
import * as React from 'react';

class Todo extends React.Component<ITodo.Props, ITodo.State> {
  render() {
    return (
      <li className="list-group-item"
          onClick={this.props.onToggle.bind(this)}
      >
        {this.props.todo.text}
      </li>
    );
  }

  public static propTypes = {
    onToggle: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired
  };
}

export default Todo;
