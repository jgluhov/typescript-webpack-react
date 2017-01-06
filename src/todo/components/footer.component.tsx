///<reference path="../interfaces.d.ts" />
import * as React from 'react';
import FilterListComponent from './filter-list/filter-list.component';

const FooterComponent = () => (
  <footer>
    <div className="panel panel-default">
      <div className="panel-body">
        <FilterListComponent />
      </div>
    </div>
  </footer>
);

export default FooterComponent;
