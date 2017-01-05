declare namespace Data {
  interface ITodo {
    id: number,
    text: string
    completed?: boolean
  }
}
declare namespace Actions {
  interface ITodo {
    type: string,
    payload: Data.ITodo
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
}