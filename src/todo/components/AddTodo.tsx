import * as React from 'react';
import * as Redux from 'react-redux';
import * as Helpers from '../helpers';
// import {addTodo} from '../actions';

class AddTodo extends React.Component<{}, {}>{

  private input: HTMLInputElement;

  onSubmit(e: Event) {
    e.preventDefault();

    if(!Helpers.isValid(this.input.value)) {
      return;
    }

    // this.props.dispatch(addTodo(this.input.value));
    this.input.value = '';
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="todo-text">Todo:</label>
              <input ref={node => this.input = node}
                     id="todo-text"
                     className="form-control"
                     placeholder="What do you want todo?"
              />
            </div>
            <button type="submit" className="btn btn-default">Add todo</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(AddTodo);
