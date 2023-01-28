import React from 'react';
import '../styles/TodoSearch.css';

const onSearch = (e) =>{
  console.log(e.target.value)
}

function TodoSearch() {
  return (
    <input 
    className="TodoSearch" placeholder="Perro"
    onChange = {onSearch} />
  );
}

export { TodoSearch };