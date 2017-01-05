///<reference path="../interfaces.d.ts" />

export const addTodo = (text: string): Actions.ITodo => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: 0,
      text
    }
  }
};
