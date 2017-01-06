type TODO_FILTER_TYPE = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

interface ITodo {
  id: string,
  text: string
  completed?: boolean
}

interface IFilter {
  filter: TODO_FILTER_TYPE,
  text: string
}

declare namespace Actions {
  interface ICreateTodo {
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
      filter: TODO_FILTER_TYPE
    }
  }
}


declare namespace ITodoInputComponent {
  interface Props {
    createTodo: (text: string) => void
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


declare namespace ITodosListItemComponent {
  interface Props {
    todo: ITodo,
    onToggle: (todo: ITodo) => void,
    className: string
  }
  interface State {}
}


declare namespace IFilterListComponent {
  interface OwnProps {
    children?: React.ReactNode
  }
  interface OwnState {}

  interface StateProps {
    filters: IFilter[]
  }

  interface DispatchProps {}

  interface Props extends OwnProps, StateProps, DispatchProps {}
  interface State extends OwnState {}
}

declare namespace IFilterListItemComponent {

  interface OwnProps {
    filter: TODO_FILTER_TYPE,
    children?: React.ReactNode
  }

  interface OwnState {}

  interface StateProps {
    active: boolean
  }

  interface DispatchProps {
    onSelect: (filter: TODO_FILTER_TYPE) => Actions.IFilterTodos
  }

  interface Props extends OwnProps, StateProps, DispatchProps{}
  interface State extends OwnState {}
}


declare interface IAppState {
  todos: ITodo[],
  filter: TODO_FILTER_TYPE,
  filters: IFilter[]
}
