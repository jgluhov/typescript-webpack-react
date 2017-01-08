import * as React from 'react';
import * as Redux from 'react-redux';
import * as Constants from '../constants';
import Helpers from '../helpers';

class TodosListCounterComponent extends React.Component
  <ITodosListCounterComponent.Props, ITodosListCounterComponent.State> {

  render() {
    return (
      <div className="items-counter">
        {this.props.count} {Helpers.pluralize(this.props.count, 'item')} left
      </div>
    );
  }

  public static countTodos = (todos: ITodo[], filter: TODO_FILTER_TYPE): number => {
    switch (filter) {
      case Constants.FILTER_ALL:
        return todos.length;
      case Constants.FILTER_COMPLETED:
        return todos.filter((todo: ITodo) => todo.completed).length;
      case Constants.FILTER_ACTIVE:
        return todos.filter((todo: ITodo) => !todo.completed).length;
      default:
        return todos.length;
    }
  };
}

export default Redux.connect(
  (state) => ({
    count: TodosListCounterComponent.countTodos(state.todos, state.filter)
  }))
(TodosListCounterComponent);
