import React, { createContext, useReducer, useContext } from 'react';

import rootReducer from '../../store/reducers';
import { VISIBILITY_FILTERS } from '../../constants';


const initialToDoState = {
  todos: {
    allIds: [],
    byIds: {}
  },
  visibilityFilter: VISIBILITY_FILTERS.ALL
};

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialToDoState);
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export const useStore = () => useContext(TodoContext);
