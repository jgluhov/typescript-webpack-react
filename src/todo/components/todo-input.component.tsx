///<reference path="../interfaces.d.ts" />
import * as React from 'react';
import * as Redux from 'react-redux';
import * as Actions from '../actions';
import * as Constants from '../constants';
import Helpers from '../helpers';

class TodoInputComponent extends React.Component
  <ITodoInputComponent.Props, ITodoInputComponent.State> {
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
          <label htmlFor="todo-text" className="sr-only"></label>
          <input ref={node => this.input = node}
                 id="todo-text"
                 className="form-control input-lg"
                 placeholder={Constants.TODO_INPUT_PLACEHOLDER}
          />
        </div>
      </form>
    );
  }
}

export default Redux.connect(
  (state) => state,
  (dispatch) => ({
    addTodo: (text: string) => dispatch(Actions.addTodo(text))
  })
)(TodoInputComponent);
