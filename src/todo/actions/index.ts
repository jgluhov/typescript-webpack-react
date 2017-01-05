///<reference path="../interfaces/actions.d.ts" />

namespace Actions {
  export const addTodo = (text: string): Actions.ITodo => ({
    type: 'ADD_TODO',
    payload: {
      id: 0,
      text
    }
  });
}
