import {
  createSlice,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { TodoState } from '../types'

const InitialState: TodoState = {
  ids: [],
  todoInfo: {},
}

let UniId = -1

const slicer = createSlice({
  name: 'todos',
  initialState: InitialState,
  reducers: {
    addTodo: (state, action) => {
      const newId = ++UniId
      state.ids.push(newId)
      state.todoInfo[newId] = { completed: false, content: action.payload }
    },
    toggleTodo: (state, action) => {
      const id = action.payload
      state.todoInfo[id].completed = !state.todoInfo[id].completed
    },
    removeTodo: (state, action) => {
      const id = action.payload
      delete state.todoInfo[id]
      state.ids = state.ids.filter(stateId => stateId !== id)
    },
  },
})

export const { addTodo, removeTodo, toggleTodo } = slicer.actions
export const { reducer } = slicer
