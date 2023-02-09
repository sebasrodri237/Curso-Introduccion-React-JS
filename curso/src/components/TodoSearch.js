import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('');

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