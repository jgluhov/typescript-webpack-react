declare namespace Data {
  interface ITodo {
    id: string,
    text: string
    completed?: boolean
  }

  type IFilter = string;
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

  interface IFilter {
    type: string,
    filter: Data.IFilter
  }
}

declare namespace AddTodo {
  interface IProps {
    addTodo: (value: string) => void
  }
  interface IState {}
}

declare namespace Todo {
  interface IProps {
    todo: Data.ITodo,
    onToggle: (todo: Data.ITodo) => void,
    className: string
  }
  interface IState {}
}

declare namespace TodoList {
  interface IProps {
    todos: Data.ITodo[],
    onToggle: (todo: Data.ITodo) => any
  }
  interface IState {}

  type TODOS_FILTER = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
}
