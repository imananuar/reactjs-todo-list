import React from 'react';
import Todo from './Todo';

function TodoList({todos, handleDelete, handleCompletedTask, setComplete }) {

  const taskCompleteOrNot = () => {
    setComplete(todos.some(todo => todo.complete));
  }
  
  return (
    <div className="todo-list">
        {todos.map(todo => (
          <div className='todo-bar' key={todo.id}>
            <Todo 
            todo={todo}
            handleDelete={handleDelete}
            handleCompletedTask={handleCompletedTask}
            taskCompleteOrNot={taskCompleteOrNot}
            />
          </div>
        ))}
    </div>
  )
}

export default TodoList