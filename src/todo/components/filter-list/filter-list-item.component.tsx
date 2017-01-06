///<reference path="../../interfaces.d.ts" />
import * as React from 'react';
import * as Redux from 'react-redux';
import * as Actions from '../../actions';

class FilterListItemComponent extends React.Component
  <IFilterListItemComponent.Props, IFilterListItemComponent.State> {

  onClick(e: Event) {
    e.preventDefault();
    this.props.onSelect(this.props.filter);
  }

  render() {
    return (
      <a href="#" onClick={this.onClick.bind(this)}>
        {this.props.children}
      </a>
    );
  }
}

export default Redux.connect(
  (state: IAppState, props: IFilterListItemComponent.Props) => ({
    active: props.filter === state.filter
  }),
  (dispatch: Redux.Dispatch<Object>) => ({
    onSelect: (filter: TODOS_FILTER) => dispatch(Actions.filterTodos(filter))
  })
)(FilterListItemComponent);
