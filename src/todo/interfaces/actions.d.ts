declare namespace Actions {
  interface ITodo {
    type: string,
    payload: {
      id: number,
      text: string
    }
  }
}