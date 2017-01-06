import * as Redux from 'react-redux';
import * as Actions from '../actions';

import TodoForm from '../components/TodoForm';

export default Redux.connect(
  (state) => state,
  (dispatch) => ({
    addTodo: (text: string) => dispatch(Actions.addTodo(text))
  })
)(TodoForm);
