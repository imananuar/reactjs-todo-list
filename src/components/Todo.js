import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faPenToSquare, faCircleCheck} from '@fortawesome/free-solid-svg-icons';

// Kita masukkan every todo ke dalam todoList.

function Todo({todo, handleDelete, handleCompletedTask, taskCompleteOrNot}) {

  const deleteTask = () => {
    handleDelete(todo)
  };

  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleEdit = (todo) => {
    setEditing(true);
  };

  const changeValue = (e) => {
    todo.task = e.target.value
  }

  const handleConfirm = () => {
    setEditing(false);
  };

  const handleCheckBox = (todo) => {
    taskCompleteOrNot();
    handleCompletedTask(todo.complete);
    setChecked(!checked);
    todo.complete = !todo.complete;
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
          onChange={() => {handleCheckBox(todo)}}
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