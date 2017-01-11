///<reference path="../../interfaces.d.ts" />
import * as React from 'react';
import { Link } from 'react-router';
import * as Constants from '../../constants';

class FilterListItemComponent extends React.Component
  <IFilterListItemComponent.Props, IFilterListItemComponent.State> {

  linkTo(filter: IFilter): string {
    return filter.filter === Constants.FILTER_ALL ? '' : filter.text;
  }

  render() {
    return (
      <Link className="btn btn-default"
            to={this.linkTo.call(this, this.props.filter)}
      >
        {this.props.filter.text}
      </Link>
    );
  }
}

export default FilterListItemComponent;
