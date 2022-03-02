import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function TodoForm({addTodo}) {

    const[todo, setTodo] = useState({
        task: "",
        id: "",
        complete: false
      })
      // Todo -> Current todo yang kita nak buat.

    const handleChange = (e) => {
        setTodo({...todo, task: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4()});

            // Reset Task Input
            setTodo({...todo, task: ""})
        }
    }

  return (
    <form className='todo-form' 
    onSubmit={handleSubmit}
    >

        <input
        name="task"
        value={todo.task}
        className="todo-input" 
        placeholder='What are you going to do?'
        type='text'
        onChange={handleChange}
        autoComplete="off"
        />

        <button 
        className="add-task"
        type="submit"
        >
            Add Task
        </button>
    </form>
  )
}

export default TodoForm