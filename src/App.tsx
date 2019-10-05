import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    { name: "default", id: 0 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>TODO App</h2>
        <TodoInput />
        <TodoList tasks = { tasks }/>
      </header>
    </div>
  );
}

export default App;
