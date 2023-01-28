import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton(props) {
  
  const ClickButton = () => {
    alert("Se va a crear una tarea")
  }

  return (
    <button 
    className="CreateTodoButton"
    onClick= {ClickButton}>
      +
      
    </button>
  );
}

export { CreateTodoButton };