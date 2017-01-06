import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import {Provider} from "react-redux";

import store from './store';

import HeaderComponent from './components/header.component';
import MainComponent from './components/main.component';
import FooterComponent from './components/footer.component';

const TodoApp = () => (
  <Provider store={store}>
    <div className="container">
      <HeaderComponent/>
      <MainComponent />
      <FooterComponent />
    </div>
  </Provider>
);

export default TodoApp;