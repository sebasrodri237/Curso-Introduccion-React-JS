import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}) {

  const onSearch = (e) =>{
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  return (
    <input 
    className="TodoSearch" placeholder="Perro"
    value={searchValue}
    onChange = {onSearch} />
  );
}

export { TodoSearch };