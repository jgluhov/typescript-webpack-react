import * as React from 'react';
import * as ReactDOM from 'react-dom';

import UpdatedComponent from "./components/updated.component";

ReactDOM.render(
  <UpdatedComponent value={5} />,
  document.getElementById('root')
);
