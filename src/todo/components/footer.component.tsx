///<reference path="../interfaces.d.ts" />
import * as React from 'react';
import FilterListComponent from './filter-list/filter-list.component';

const FooterComponent = () => (
  <footer>
    <div className="well well-sm">
      <FilterListComponent />
    </div>
  </footer>
);

export default FooterComponent;
