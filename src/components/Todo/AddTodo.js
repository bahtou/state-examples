import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';


function AddTodo({ dispatch }) {
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


export default connect()(AddTodo);
