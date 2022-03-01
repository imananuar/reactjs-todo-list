import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

// Kita masukkan every todo ke dalam todoList.

function Todo({todo, handleDelete}) {

  const deleteTask = () => {
    handleDelete(todo.id)
  }

  return (
    <div className="task">
      <p>{todo.task}</p>
      <FontAwesomeIcon icon={faTrashCan} 
      type="button"  
      onClick={deleteTask}
      />
    </div>
  )
}

export default Todo