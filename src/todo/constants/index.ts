export namespace Actions {
  export const ADD_TODO: string = 'ADD_TODO';
  export const TOGGLE_TODO: string = 'TOGGLE_TODO';
  export const FILTER_TODOS: string = 'FILTER_TODOS';
}

export const FILTER_SHOW_ALL: string = 'SHOW_ALL';
export const FILTER_SHOW_COMPLETED: string = 'SHOW_COMPLETED';
export const FILTER_SHOW_ACTIVE: string = 'SHOW_ACTIVE';

export const TODO_FILTERS = [
  FILTER_SHOW_ALL,
  FILTER_SHOW_COMPLETED,
  FILTER_SHOW_ACTIVE
];

export namespace TodoForm {
  export const LABEL = 'Todo:';
  export const PLACEHOLDER = 'What needs to be done?';
}