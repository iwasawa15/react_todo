import React, { useState, FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

import { Store } from "redux";

// pure React
const App: React.FC = () => {
  const [tasks, setTasks] = useState([{ name: "", id: 0 }]);
  const [uniqueId, setId] = useState(0);

  function addTodo(name: string) {
    tasks.push({
      name,
      id: uniqueId
    });
    setId(uniqueId + 1);
  }

  function resetTodo() {
    setTasks([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>TODO App</h2>
        <TodoInput addTodo={addTodo} />
        <button onClick={resetTodo}>リセット</button>
        <TodoList tasks={tasks} />
      </header>
    </div>
  );
};

export default App;
