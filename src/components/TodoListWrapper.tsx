import TodoList from './TodoList';
import * as React from 'react';

const TodoListWrapper = function TodoListWrapper() {
  return (
    <div>
      <div>
        <p>Done</p>
        <TodoList isCompleted />
      </div>

      <div>
        <p>Todo</p>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoListWrapper;
