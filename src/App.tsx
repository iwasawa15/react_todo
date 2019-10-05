import React, { useState, FC } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    { name: "default", id: 0 },
  ]);
  const [uniqueId, setId] = useState(0)

  function addTodo(name: string){

    tasks.push({
      name,
      id: uniqueId
    })
    setId(uniqueId + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>TODO App</h2>
        <TodoInput addTodo={ addTodo }/>
        <TodoList tasks = { tasks }/>
      </header>
    </div>
  );
}

export default App;
