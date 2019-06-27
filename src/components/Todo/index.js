import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';
import './styles.css';

import { TodoProvider } from './todoProvider';


function TodoApp() {
  return (
    <TodoProvider>
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    </TodoProvider>
  );
}


export default TodoApp;
