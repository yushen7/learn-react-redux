import { PayloadAction } from '@reduxjs/toolkit';
import { TodoTypes } from './actions';

export interface TodoInfo {
  content: string;
  completed: boolean;
}

export interface TodoState {
  ids: (number | string)[];
  todoInfo: Record<string, TodoInfo>;
}
export type TodoAction = PayloadAction<
  {
    id: string | number;
    content?: string;
  },
  TodoTypes
>;
