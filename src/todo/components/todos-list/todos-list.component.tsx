///<reference path="../../interfaces.d.ts"/>

import * as Redux from 'react-redux';
import * as React from 'react';
import * as Actions from '../../actions';
import * as Constants from '../../constants';
import TodosListItemComponent from './todos-list-item.component';

class TodosListComponent extends React.Component
  <ITodosListComponent.Props, ITodosListComponent.State> {

  render() {
    return (
      <ul className="list-group">
        {this.props.todos.map((todo: Data.ITodo) => (
          <TodosListItemComponent
            key={todo.id}
            className='list-group-item'
            todo={todo}
            onToggle={this.props.onToggle.bind(this, todo)}
          >
            {todo.text}
          </TodosListItemComponent>
        ))}
      </ul>
    )
  }

  public static filterTodos = (todos: ITodo[], filter: TODOS_FILTER): ITodo[] => {
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
  };

  public static propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onToggle: React.PropTypes.func.isRequired
  };
}

export default Redux.connect(
  (state) => ({
    todos: TodosListComponent.filterTodos(state.todos, state.filter)
  }),
  (dispatch) => ({
    onToggle: (todo: ITodo) => dispatch(Actions.toggleTodo(todo.id))
  })
)(TodosListComponent);
