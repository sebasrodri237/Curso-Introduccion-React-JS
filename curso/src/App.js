import React from "react";
import {TodoCounter} from "./components/TodoCounter.js";
import {TodoSearch} from "./components/TodoSearch.js";
import {TodoList} from "./components/TodoList.js";
import {TodoItem} from "./components/TodoItem.js";
import {CreateTodoButton} from "./components/CreateTodoButton.js";
//import './App.css';

const toDos = [{text: "pasear perro", completed: false},
               {text: "comer perro caliente", completed: false},
               {text: "comprar comida perro", completed: false}]

function App() {
  return (
    <React.Fragment>
      {/* para evitar tener que enviar div y que nuestro css tenga problemas,
      se creo la etiqueta invisible React.Fragment, etsa no requiere estilos */}
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {toDos.map((todo => (
          <TodoItem key ={todo.text} text ={todo.text}/> 
        )))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
