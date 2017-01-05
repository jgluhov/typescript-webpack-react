///<reference path="../interfaces.d.ts"/>

import * as Constants from '../constants';

const filter = (state = Constants.FILTER_SHOW_ALL, action: Actions.IFilter): Data.IFilter => {
  switch (action.type) {
    case Constants.Actions.SET_FILTER:
      return action.filter;
    default: return state;
  }
};

export default filter;