import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
// import './App.css';

const defaultTodos = [
  { text: 'Comer perro caliente', completed: true },
  { text: 'Tomar el curso de intro a Perro JS', completed: false },
  { text: 'Llorar como perro', completed: true },
  { text: 'PePePeRROOOO', completed: false },
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchVal, setSearchVal] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let todoFilters = []

  if(!searchVal.length >= 1){
    todoFilters = todos
  }else{
    todoFilters = todos.filter(todo => {
      const searchText = searchVal.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText) 
    });
  }

  return (
    <React.Fragment>
      <TodoCounter completTodos = {completedTodos} allTodos = {totalTodos}/>
      <TodoSearch searchValue ={searchVal} setSearchValue = {setSearchVal}/>

      <TodoList>
        {todoFilters.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;