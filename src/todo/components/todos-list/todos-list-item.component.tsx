///<reference path="../../interfaces.d.ts" />
import '../../styles/todo.css';
import * as React from 'react';

class TodosListItemComponent extends React.Component<ITodosListItemComponent.Props, ITodosListItemComponent.State> {
  render() {
    return (
      <li className="list-group-item">
        <div onClick={this.props.onToggle.bind(this, this.props.todo)}>
          {this.props.todo.text}
        </div>
      </li>
    );
  }

  public static propTypes = {
    onToggle: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired
  };
}

export default TodosListItemComponent;
