type TODOS_FILTER = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

interface LINK {
  href: string,
  text: string
}

interface ITodo {
  id: string,
  text: string
  completed?: boolean
}

declare namespace Data {
  interface ITodo {
    id: string,
    text: string
    completed?: boolean
  }

  type IFilter = TODOS_FILTER;
}

declare namespace Actions {
  interface IAddTodo {
    type: string,
    payload: {
      id: string,
      text: string
    }
  }

  interface IToggleTodo {
    type: string,
    payload: {
      id: string
    }
  }

  interface IFilterTodos {
    type: string,
    payload: {
      filter: Data.IFilter
    }
  }
}


declare namespace ITodo {
  interface Props {
    todo: Data.ITodo,
    onToggle: (todo: Data.ITodo) => void,
    className: string
  }
  interface State {}
}

declare namespace ITodoInputComponent {
  interface Props {
    addTodo: (text: string) => void
  }
  interface State {}
}

declare namespace ITodosListComponent {
  interface Props {
    todos: ITodo[],
    onToggle: (todo: ITodo) => Actions.IToggleTodo,
    children?: React.ReactNode
  }
  interface State {}
}


declare namespace IFilterListComponent {
  interface Props {
    filters: TODOS_FILTER[],
    children?: React.ReactNode
  }
  interface State {}
}

declare namespace  IFilterListItemComponent {
  interface Props {
    active: boolean,
    onSelect: (filter: TODOS_FILTER) => void,
    filter: TODOS_FILTER,
    children?: React.ReactNode
  }
  interface State {}
}


declare interface IAppState {
  todos: Data.ITodo[],
  filter: TODOS_FILTER,
  filters: TODOS_FILTER[]
}



