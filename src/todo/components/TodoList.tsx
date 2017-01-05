///<reference path="../interfaces.d.ts"/>

import * as React from 'react';
import * as Redux from 'react-redux';
import * as Constants from '../constants';
import Todo from './Todo';
import * as Actions from '../actions';

class TodoList extends React.Component<TodoList.IProps, TodoList.IState> {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          You should do:
        </div>
        <div className="panel-body">
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

  public static propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired
  };
}

export default Redux.connect(
  (state) => ({
    todos: TodoList.filterTodos(state.todos, state.filter)
  }),
  (dispatch) => ({
    onToggle: (todo: Data.ITodo) => dispatch(Actions.toggleTodo(todo.id))
  })
)(TodoList);
