import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

// Kita masukkan every todo ke dalam todoList.

function Todo({todo}) {

  return (
    <div>
      <p>{todo.task}</p>
    </div>
  )
}

export default Todo