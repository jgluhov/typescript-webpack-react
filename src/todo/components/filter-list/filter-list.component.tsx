import * as React from 'react';
import * as Redux from 'react-redux';

import FilterListItemComponent from './filter-list-item.component';

class FilterListComponent extends React.Component
  <IFilterListComponent.Props, IFilterListComponent.State> {

  render() {
    return (
      <ul className="list-inline">
        {this.props.filters.map((filter: TODOS_FILTER) =>
          (<FilterListItemComponent filter={filter}>{filter}</FilterListItemComponent>))}
      </ul>
    )
  }
}

export default Redux.connect(
  (state: IAppState) => ({
    filters: [...state.filters]
  })
)(FilterListComponent);
