import React, { FC } from 'react'
import { Store } from 'redux';
import { inputTask, addTask } from '../actions/tasks';

// Redux
const TodoApp: FC<{store: Store}> = (props) => {
  const { task, tasks } = props.store.getState();
  return(
    <div>
      <input type="text" onChange={(e) => props.store.dispatch(inputTask(e.target.value))} />
			<input type="submit" value="add" onClick={() => props.store.dispatch(addTask(task))} />
			<ul>
				{
					tasks.map(function(item: string, i: number){
						return(
							<li key={i}>{item}</li>
						)
					})
				}
			</ul>
    </div>
  );
}

export default TodoApp