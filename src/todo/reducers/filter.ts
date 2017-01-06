///<reference path="../interfaces.d.ts"/>

import * as Constants from '../constants';

const filter = (state = Constants.FILTER_ALL, action: Actions.IFilterTodos) => {
  switch (action.type) {
    case Constants.Actions.FILTER_TODOS:
      return action.payload.filter;
    default: return state;
  }
};

export default filter;