///<reference path="../../interfaces.d.ts" />
import * as React from 'react';
import * as Redux from 'react-redux';
import * as Actions from '../../actions';

class FilterListItemComponent extends React.Component
  <IFilterListItemComponent.Props, IFilterListItemComponent.State> {

  private onClick(e: Event) {
    e.preventDefault();
    this.props.onSelect(this.props.filter);
  }

  private buttonClassName() {
    return ["btn", "btn-default", this.isActive(this.props.active)].join(' ');
  }

  private isActive(isActive: boolean) {
    return isActive ? 'active' : '';
  }

  render() {
    return (
      <button type="submit" className={this.buttonClassName.call(this)} onClick={this.onClick.bind(this)}>
        {this.props.children}
      </button>
    );
  }
}

export default Redux.connect(
  (state: IAppState, props: IFilterListItemComponent.OwnProps) => ({
    active: props.filter === state.filter
  }),
  (dispatch: Redux.Dispatch<Object>) => ({
    onSelect: (filter: TODO_FILTER_TYPE) => dispatch(Actions.filterTodos(filter))
  })
)(FilterListItemComponent);
