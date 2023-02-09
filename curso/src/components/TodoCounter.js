import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter({completTodos,allTodos}) {
  return (
    <h2 className="TodoCounter">Has completado {completTodos} de {allTodos} TODOs</h2>
  );
}

export { TodoCounter };