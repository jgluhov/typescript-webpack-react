declare namespace Data {
  interface ITodo {
    id: string,
    text: string
    completed?: boolean
  }

  type IFilter = string;
}

declare namespace Actions {
  interface ITodo {
    type: string,
    todo: Data.ITodo
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

declare namespace TodoList {
  interface IProps {
    todos: Data.ITodo[]
  }
  interface IState {}

  type TODOS_FILTER = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
}
