import 'bootstrap/dist/css/bootstrap.css';
import './styles/common.css';

import * as React from 'react';
import {Provider} from 'react-redux';
import App from './components/app.component';
import {Router, Route, browserHistory} from 'react-router';

import store from './store';

const TodoApp = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App}></Route>
    </Router>
  </Provider>
);

export default TodoApp;