import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  // Todos -> Letak semua todo yang pernah dicatatkan

  const addTodo = (todo) => {
    setTodos([todo, ...todos])

    // Kita setkan todo ni dengan add todo baru, then disambungkan dengan todos yang lama
    // Yang baru nak buat akan muncul paling atas, yang sebelum ni akan turun ke bawah
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    // REMEMBER: Everytime nak update, guna setTodos
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;