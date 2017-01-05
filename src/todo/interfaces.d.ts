declare namespace Actions {
  interface ITodo {
    type: string,
    payload: {
      id: number,
      text: string
    }
  }
}

declare namespace AddTodo {
  interface Props {
    addTodo: (value: string) => void
  }
  interface State {}
}