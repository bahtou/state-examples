import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../store/actions';


const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const styles = todo && todo.completed
    ? 'todo-item__text--completed'
    : 'todo-item__text';

  return (
    <li className="todo-item" onClick={handleToggle}>
      {todo && todo.completed ? '👌' : '👋'}{' '}
      <span className={styles}>
        {todo.content}
      </span>
    </li>
  );
};


export default Todo;
