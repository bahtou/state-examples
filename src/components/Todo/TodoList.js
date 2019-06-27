import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../../store/selectors';


const TodoList = ({ todos }) => {
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


const mapStateToProps = state => {
  const todos = getTodosByVisibilityFilter(state, state.visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
