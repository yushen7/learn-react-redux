import { TodoAction } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'redux';

let todoId = -1;
export const addTodo = (content: string): TodoAction => {
  return {
    type: TodoTypes.Add,
    payload: {
      id: ++todoId,
      content,
    },
  };
};

export const toggleTodo = (targetId: string): TodoAction => {
  return {
    type: TodoTypes.ToggleStatus,
    payload: {
      id: targetId,
    },
  };
};

export const removeTodo = (targetId: string): TodoAction => {
  return {
    type: TodoTypes.Remove,
    payload: {
      id: targetId,
    },
  };
};

export const enum TodoTypes {
  Add = 'add',
  ToggleStatus = 'toggleStatus',
  Remove = 'remove',
}
