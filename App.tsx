import * as React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './src/components/AddTodo';
import TodoListWrapper from './src/components/TodoListWrapper';
import stores from './src/stores';
import './style.css';

export default function App() {
  return (
    <Provider store={stores}>
      <AddTodo />
      <TodoListWrapper />
    </Provider>
  );
}
