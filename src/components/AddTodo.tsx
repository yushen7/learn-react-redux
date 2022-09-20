import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { addTodo } from '../slicers'

const connector = connect(null, { addTodo })

const AddTodo = function AddTodo({
  addTodo,
}: ConnectedProps<typeof connector>) {
  const [todoContent, setTodoContent] = React.useState('')
  return (
    <div>
      <input
        type="text"
        value={todoContent}
        onChange={e => setTodoContent(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(todoContent)
          setTodoContent('')
        }}
      >
        Add Todo
      </button>
    </div>
  )
}

export default connector(AddTodo)
