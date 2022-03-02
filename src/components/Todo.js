import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faPenToSquare, faCircleCheck} from '@fortawesome/free-solid-svg-icons';

// Kita masukkan every todo ke dalam todoList.

function Todo({todo, handleDelete}) {

  const deleteTask = () => {
    handleDelete(todo.id)
  }

  const [editing, setEditing] = useState(false)

  const handleEdit = (todo) => {
    setEditing(true);
  }

  const changeValue = (e) => {
    todo.task = e.target.value
  }

  const handleConfirm = () => {
    setEditing(false);
  }

  return (
    <div className="task">
      {editing ? (
        <input
        type="text"
        onChange={changeValue}
        />
        ) : (
        <p>{todo.task}</p>
      )}
      <div className='icon-container'>

        {editing ? 
        <FontAwesomeIcon 
        icon={faCircleCheck} 
        className="icon" 
        type="button"
        onClick={handleConfirm}
        accessKey="enter"
        />
        : null}
        
        <FontAwesomeIcon icon={faPenToSquare}
        className="icon"
        type="button"
        onClick = {() => {handleEdit(todo)}}
        />

        <FontAwesomeIcon icon={faTrashCan}
        className="icon"
        type="button"  
        onClick={deleteTask}
        />
      </div>
    </div>
  )
}

export default Todo