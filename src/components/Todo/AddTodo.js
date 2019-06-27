import React, { useState } from 'react';

import { addTodo } from '../../store/actions';
import { useStore } from './todoProvider';


function AddTodo() {
  const { dispatch } = useStore();
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    setInput(input);
    dispatch(addTodo(input));
  };

  return (
    <div className="add-todo">
      <input
        onChange={e => setInput(e.target.value)}
        value={input} />
      <button onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}


export default AddTodo;
