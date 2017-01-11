import * as React from 'react';
import * as Redux from 'react-redux';

import FilterListItemComponent from './filter-list-item.component';

class FilterListComponent extends React.Component
  <IFilterListComponent.Props, IFilterListComponent.State> {

  render() {
    return (
      <div className="btn-group">
        { this.props.filters.map((filter: IFilter) =>
          (<FilterListItemComponent key={filter.filter} filter={filter} />))}
      </div>
    );
  }
}

export default Redux.connect(
  (state: IAppState) => ({
    filters: [...state.filters]
  })
)(FilterListComponent);
