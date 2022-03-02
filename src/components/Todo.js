import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faPenToSquare, faCircleCheck} from '@fortawesome/free-solid-svg-icons';

// Kita masukkan every todo ke dalam todoList.

function Todo({todo, handleDelete}) {

  const deleteTask = () => {
    handleDelete(todo.id)
  };

  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleEdit = (todo) => {
    setEditing(true);
  };

  const changeValue = (e) => {
    todo.task = e.target.value
  };

  const handleConfirm = () => {
    setEditing(false);
  };

  const handleCheckBox = (e) => {
    setChecked(!checked)
  }

  return (
    <div className="task">

      {editing ? (
        <input
        type="text"
        defaultValue={todo.task}
        onChange={changeValue}
        />
        ) : (
        <div className="task-container">
          <input 
          type="checkbox" 
          className="checkbox"
          defaultChecked={checked}
          onChange={(e) => {handleCheckBox(e)}}
          />

          <li style={
            checked ? {
              fontStyle: "italic", 
              textDecoration: "line-through"
              } : null
              }>
            {todo.task}
          
          </li>

        </div>
      )}

      <div className='icon-container'>

        {editing ? 
        <FontAwesomeIcon 
        icon={faCircleCheck} 
        className="icon" 
        type="button"
        onClick={handleConfirm}
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