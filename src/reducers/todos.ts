import { TodoTypes } from '../actions';
import { TodoAction, TodoState } from '../types';

const initialState: TodoState = {
  ids: [],
  todoInfo: {},
};
export default function todoReducer(
  state = initialState,
  action: TodoAction
): TodoState {
  if (!action.payload) {
    return state;
  }
  const { id, content } = action.payload;
  if (action.type === TodoTypes.Add) {
    return {
      ...state,
      ids: [...state.ids, id],
      todoInfo: {
        ...state.todoInfo,
        [id]: {
          content,
          completed: false,
        },
      },
    };
  }

  if (action.type === TodoTypes.ToggleStatus) {
    const { content, completed } = state.todoInfo[id];
    return {
      ...state,
      todoInfo: {
        ...state.todoInfo,
        [id]: {
          content,
          completed: !completed,
        },
      },
    };
  }

  if (action.type === TodoTypes.Remove) {
    const newState = {
      ...state,
      ids: state.ids.filter((listId) => listId !== Number(id)),
      todoInfo: {
        ...state.todoInfo,
      },
    };
    delete newState.todoInfo[id];
    return newState;
  }

  return state;
}
