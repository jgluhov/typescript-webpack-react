///<reference path="../interfaces.d.ts" />
import * as React from 'react';
import Helpers from '../helpers';
import * as Constants from '../constants';

class TodoForm extends React.Component<ITodoForm.Props, ITodoForm.State> {
  private input: HTMLInputElement;

  onSubmit(e: Event) {
    e.preventDefault();

    if(!Helpers.isValid(this.input.value)) {
      return;
    }

    this.props.addTodo(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="todo-text" className="sr-only">
            {Constants.TodoForm.LABEL}
          </label>
          <input ref={node => this.input = node}
                 id="todo-text"
                 className="form-control input-lg"
                 placeholder={Constants.TodoForm.PLACEHOLDER}
          />
        </div>
      </form>
    )
  }
}

export default TodoForm;
