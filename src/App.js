import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {

  const [todos, setTodos] = useState([]);
  // Todos -> Letak semua todo yang pernah dicatatkan

  const [complete, setComplete] = useState(
    // (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))).map(item => item.complete)
    false
  );

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // Access localstorage, get item from local_storage_key
    // parse it to be an objects.

    if (storageTodos) {
      // If storageTodos is not empty
      setTodos(storageTodos);
      // setTodos will have the item from the local_storage_key
    }

  }, [])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
    // Kita setkan todo ni dengan add todo baru, then disambungkan dengan todos yang lama
    // Yang baru nak buat akan muncul paling atas, yang sebelum ni akan turun ke bawah
  }

  const handleDelete = (currentTodo) => {
    setTodos(todos.filter(todo => todo.id !== currentTodo.id));
    // REMEMBER: Everytime nak update, guna setTodos
  }
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    // Access local storage,  set key and value. setItem(key, value)
  }, [todos]);
  // Whenever todos is changed (the array has additional or less items)
  // Grab the updated version of local_storage_key

  const handleDeleteAll = () => {
    setTodos([]);
    console.log(todos.length)
  }

  const handleRemoveCompletedTask = () => {
    setTodos(todos.filter(todo => !todo.complete ));
    setComplete(false)
  }

  const handleCompletedTask = () => {
    return complete
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} 
      handleDelete={handleDelete}
      handleCompletedTask={handleCompletedTask}
      setComplete={setComplete}
      />

      <div className='button-container'>

        {/* Kalau todo ada lebih dari 1, baru delete all muncul */}
        { todos.length > 1 ?
          <button 
          className="delete-all-button" 
          type="button"
          onClick={handleDeleteAll}>
            Delete All
          </button>
          : null 
        }

        {/* Conditional: if completed task ada yang true, then baru appear */}
        {handleCompletedTask() ? 
        <button 
        className=" delete-all-button remove-completed-task" 
        type="button"
        onClick={handleRemoveCompletedTask}>
          Remove Completed Task
        </button> 
        : null
        }

        </div>

      {/* Make Remove Completed Task */}
      
    </div>
  );
}

export default App;