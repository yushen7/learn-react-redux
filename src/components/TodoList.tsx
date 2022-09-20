import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { TodoState } from '../types'
import TodoItem from './TodoItem'

const connector = connect(({ todos }: { todos: TodoState }) => {
  console.log(todos, 'todos')
  return {
    todoInfoList: Object.keys(todos.todoInfo).map(key => ({
      ...todos.todoInfo[key],
      id: key,
    })),
  }
})

interface TodoListProps extends ConnectedProps<typeof connector> {
  isCompleted?: boolean
}

const TodoList = function TodoList({
  todoInfoList,
  isCompleted = false,
}: TodoListProps) {
  const displayTodoInfoList = todoInfoList.filter(todoInfo =>
    isCompleted ? todoInfo.completed : !todoInfo.completed
  )
  return (
    <ul>
      {displayTodoInfoList.map(({ content, id, completed }) => (
        <TodoItem key={id} content={content} id={id} completed={completed} />
      ))}
    </ul>
  )
}

export default connector(TodoList)
