///<reference path="../interfaces.d.ts" />
import '../styles/footer.css';
import * as React from 'react';
import FilterListComponent from './filter-list/filter-list.component';
import TodosListCounterComponent from './todos-list-counter.component';

const FooterComponent = () => (
  <footer>
    <div className="panel panel-default">
      <div className="panel-body">
        <TodosListCounterComponent />
        <FilterListComponent />
      </div>
    </div>
  </footer>
);

export default FooterComponent;
