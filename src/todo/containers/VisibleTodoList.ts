///<reference path="../interfaces.d.ts"/>
import * as Redux from 'react-redux';

import * as Actions from '../actions';
import * as Constants from '../constants';
import TodoList from '../components/TodoList';

const filterTodos = (
  todos: Data.ITodo[],
  filter: IVisibleTodoList.TODOS_FILTER): Data.ITodo[] =>
{
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

export default Redux.connect(
  (state) => ({
    todos: filterTodos(state.todos, state.filter)
  }),
  (dispatch) => ({
    onToggle: (todo: Data.ITodo) => dispatch(Actions.toggleTodo(todo.id))
  })
)(TodoList);