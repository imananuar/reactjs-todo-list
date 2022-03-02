import React, { useState } from 'react';
import Todo from './Todo';

function TodoList({todos, handleDelete }) {

  console.log(todos);
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