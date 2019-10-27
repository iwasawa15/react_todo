import React, { FC } from "react";
import { Store } from "redux";
import { inputTask, addTask } from "../actions/tasks";

interface Props {
  task: string;
  tasks: string[];
  inputTask: (task: string) => void;
  addTask: (task: string) => void;
}

// Redux
const TodoApp: FC<Props> = props => {
  return (
    <div>
      <input type="text" onChange={e => props.inputTask(e.target.value)} />
      <input
        type="submit"
        value="add"
        onClick={() => props.addTask(props.task)}
      />
      <ul>
        {props.tasks.map(function(item: string, i: number) {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
