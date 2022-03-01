import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import Todo from './Todo';

function TodoList({todos, handleDelete}) {

  return (
    <div className="todo-list">
        {todos.map(todo => (
          <div className='todo-bar' key={todo.id}>
            <Todo 
            todo={todo}
            handleDelete={handleDelete}
            />
          </div>
        ))}
    </div>
  )
}

export default TodoList