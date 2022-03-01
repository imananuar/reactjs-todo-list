import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  // Todos -> Letak semua todo yang pernah dicatatkan

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }


  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>

      <TodoList todos={todos}/>


    </div>
  );
}

export default App;