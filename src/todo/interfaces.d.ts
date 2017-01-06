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


declare namespace ITodo {
  interface Props {
    todo: Data.ITodo,
    onToggle: (todo: Data.ITodo) => void,
    className: string
  }
  interface State {}
}

declare namespace ITodoForm {
  interface Props {
    addTodo: (text: string) => void
  }
  interface State {}
}

declare namespace ITodoList {
  interface Props {
    todos: Data.ITodo[],
    onToggle: (todo: Data.ITodo) => any
  }
  interface State {}
}

declare namespace IVisibleTodoList {
  type TODOS_FILTER = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
}
