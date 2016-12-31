import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Greeting from './greeting';
import Hello from './hello';

ReactDOM.render(
  <div><Greeting name='JGluhov'/><Hello value={7}/></div>,
  document.getElementById('root')
);
