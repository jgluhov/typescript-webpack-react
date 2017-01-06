export namespace Actions {
  export const ADD_TODO: string = 'ADD_TODO';
  export const TOGGLE_TODO: string = 'TOGGLE_TODO';
  export const SET_FILTER: string = 'SET_FILTER';
}

export const FILTER_SHOW_ALL: string = 'SHOW_ALL';
export const FILTER_SHOW_COMPLETED: string = 'SHOW_COMPLETED';
export const FILTER_SHOW_ACTIVE: string = 'SHOW_ACTIVE';

export namespace TodoForm {
  export const LABEL = 'Todo:';
  export const PLACEHOLDER = 'What needs to be done?';
}