///<reference path="../../interfaces.d.ts" />
import '../../styles/todo.css';
import * as React from 'react';

class TodosListItemComponent extends React.Component<ITodosListItemComponent.Props, ITodosListItemComponent.State> {

  onToggle(e: Event) {
    e.stopPropagation();
    this.props.onToggle(this.props.todo);
  }

  onRemove(e: Event) {
    e.stopPropagation();
    this.props.onRemove(this.props.todo);
  }

  completedClass(todo: ITodo) {
    return [todo.completed ? 'completed': ''];
  }

  render() {
    return (
      <li className="list-group-item">
        <div onClick={this.onToggle.bind(this)} className={this.completedClass.call(this, this.props.todo)}>
          {this.props.todo.text}
          <button type="button" className="btn btn-link" onClick={this.onRemove.bind(this)}>
            <i className="glyphicon glyphicon-remove"></i>
          </button>
        </div>
      </li>
    );
  }

  public static propTypes = {
    onToggle: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired
  };
}

export default TodosListItemComponent;
