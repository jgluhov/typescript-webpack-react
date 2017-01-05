///<reference path="../interfaces.d.ts" />
import Helpers from '../helpers';
import * as Constants from '../constants';

export const addTodo = (text: string): Actions.ITodo => {
  return {
    type: Constants.Actions.ADD_TODO,
    todo: {
      id: Helpers.uuid(),
      text
    }
  }
};
