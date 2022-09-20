import { combineReducers } from 'redux'

import { reducer as todoReducer } from './todoSlicer'
export { addTodo, toggleTodo, removeTodo } from './todoSlicer'

export default combineReducers({ todos: todoReducer })
