import React from 'react';

import { useStore } from './todoProvider';
import { getTodosByVisibilityFilter } from '../../store/selectors';
import Todo from './Todo';


const TodoList = () => {
  const { state } = useStore();
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
        : 'No todos, yay!'}
    </ul>
  );
};


export default TodoList;
