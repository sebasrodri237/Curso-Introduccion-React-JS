import React from 'react';
import '../styles/TodoList.css'

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
        {/* Paso todos los hijos dentro del componente, puede ser texto/etiquetas/componentes ...etc */}
      </ul>
    </section>
  );
}

export { TodoList };