
export namespace Actions {
  export const ADD_TODO: string = 'ADD_TODO';
  export const TOGGLE_TODO: string = 'TOGGLE_TODO';
  export const FILTER_TODOS: string = 'FILTER_TODOS';
}

export const FILTER_ALL: string = 'FILTER_ALL';
export const FILTER_COMPLETED: string = 'FILTER_COMPLETED';
export const FILTER_ACTIVE: string = 'FILTER_ACTIVE';

export const TODO_FILTERS = [
  {
    key: FILTER_ALL,
    value: 'all'
  },
  {
    key: FILTER_COMPLETED,
    value: 'completed'
  },
  {
    key: FILTER_ACTIVE,
    value: 'active'
  }
];

export const TODO_INPUT_PLACEHOLDER = 'What needs to be done?';