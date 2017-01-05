///<reference path="../interfaces.d.ts" />
import Helpers from '../helpers';

export const addTodo = (text: string): Actions.ITodo => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: Helpers.uuid(),
      text
    }
  }
};
