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

  interface IRemoveTodo {
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
    onRemove: (todo: ITodo) => Actions.IRemoveTodo,
    filter: string,
    children?: React.ReactNode
  }

  interface State {}
}

declare namespace IMainComponent {
  interface Props {
    filter: string,
    children?: React.ReactNode
  }
  interface State {}
}

declare namespace ITodosListCounterComponent {
  interface OwnProps {}
  interface OwnState {}
  interface StateProps {
    count: number
  }
  interface DispatchProps {}
  interface Props extends OwnProps, StateProps, DispatchProps {}
  interface State extends OwnState {}
}


declare namespace ITodosListItemComponent {
  interface OwnProps {
    todo: ITodo,
    className: string
  }

  interface OwnState {}

  interface StateProps {
    onToggle: (todo: ITodo) => void,
    onRemove: (todo: ITodo) => void
  }

  interface DispatchProps {}

  interface Props extends OwnProps, StateProps, DispatchProps {}
  interface State extends OwnState {}
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
    filter: IFilter,
    children?: React.ReactNode
  }

  interface OwnState {}

  interface Props extends OwnProps {}
  interface State extends OwnState {}
}


declare interface IAppState {
  todos: ITodo[],
  filter: TODO_FILTER_TYPE,
  filters: IFilter[]
}

declare interface IAppStorageState {
  todos: ITodo[]
}

declare namespace IAppComponent {
  interface Props {
    params: IRouteParams
  }
  interface State {}
}

interface IRouteParams {
  filter: string;
}
