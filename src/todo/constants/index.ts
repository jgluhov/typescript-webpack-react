///<reference path="../interfaces.d.ts" />
export namespace Actions {
  export const CREATE_TODO: string = 'CREATE_TODO';
  export const TOGGLE_TODO: string = 'TOGGLE_TODO';
  export const REMOVE_TODO: string = 'REMOVE_TODO';
  export const FILTER_TODOS: string = 'FILTER_TODOS';
}

export const FILTER_ALL: string = 'FILTER_ALL';
export const FILTER_COMPLETED: string = 'FILTER_COMPLETED';
export const FILTER_ACTIVE: string = 'FILTER_ACTIVE';

export const TODO_FILTERS = [
  {
    filter: FILTER_ALL,
    text: 'all'
  },
  {
    filter: FILTER_ACTIVE,
    text: 'active'
  },
  {
    filter: FILTER_COMPLETED,
    text: 'completed'
  }
];

export const TODO_INPUT_PLACEHOLDER = 'What needs to be done?';