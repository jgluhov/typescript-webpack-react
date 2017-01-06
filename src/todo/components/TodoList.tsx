///<reference path="../interfaces.d.ts"/>

import * as React from 'react';
import Todo from './Todo';

class TodoList extends React.Component<ITodoList.Props, ITodoList.State> {
  render() {
    return (
      <ul className="list-group">
        {this.props.todos.map((todo: Data.ITodo) => (
          <Todo
            key={todo.id}
            className='list-group-item'
            todo={todo}
            onToggle={this.props.onToggle.bind(this, todo)}
          >
            {todo.text}
          </Todo>
        ))}
      </ul>
    )
  }

  public static propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired
  };
}

export default TodoList;
