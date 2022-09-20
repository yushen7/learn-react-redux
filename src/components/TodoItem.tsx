import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { toggleTodo, removeTodo } from '../slicers'

const connector = connect(null, {
  toggleTodo,
  removeTodo,
})
interface TodoItemProps extends ConnectedProps<typeof connector> {
  completed: boolean
  id: string
  content: string
}
const TodoItem = function TodoItem({
  toggleTodo,
  removeTodo,
  completed,
  id,
  content,
}: TodoItemProps) {
  return (
    <div>
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '10px',
        }}
      >
        <div>
          <input
            checked={completed}
            type="checkbox"
            onChange={e => {
              toggleTodo(id)
            }}
          />

          <span className={completed ? 'content--removed' : ''}>{content}</span>
        </div>

        <button
          style={{
            height: 20,
          }}
          onClick={() => removeTodo(id)}
        >
          Remove
        </button>
      </li>
    </div>
  )
}

export default connector(TodoItem)
