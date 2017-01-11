///<reference path="../../interfaces.d.ts"/>
import * as Redux from 'react-redux';
import * as React from 'react';
import * as Actions from '../../actions';
import {filterTodos} from '../../reducers';
import TodosListItemComponent from './todos-list-item.component';

class TodosListComponent extends React.Component
  <ITodosListComponent.Props, ITodosListComponent.State> {

  render() {
    return (
      <ul className="list-group">
        {this.props.todos.map((todo: ITodo) => (
          <TodosListItemComponent
            key={todo.id}
            className='list-group-item'
            todo={todo}
            onRemove={this.props.onRemove.bind(this)}
            onToggle={this.props.onToggle.bind(this)}
          >
            {todo.text}
          </TodosListItemComponent>
        ))}
      </ul>
    )
  }

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
  (state, props: ITodosListComponent.Props) => ({
      todos: filterTodos(state, props.filter)
  }),
  (dispatch) => ({
    onToggle: (todo: ITodo) => dispatch(Actions.toggleTodo(todo.id)),
    onRemove: (todo: ITodo) => dispatch(Actions.removeTodo(todo.id))
  })
)(TodosListComponent);
