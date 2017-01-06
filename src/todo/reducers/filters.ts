///<reference path="../interfaces.d.ts"/>

import * as Constants from '../constants';

const initialState = [...Constants.TODO_FILTERS];

const filters = (state = initialState) => {
  return state;
};

export default filters;