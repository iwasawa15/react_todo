import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Action } from 'redux'

ReactDOM.render(<App />, document.getElementById('root'));

// Action の定義
interface Task{
	name: string
}

interface TasksState{
	tasks: Task[]
}

interface TaskAction extends Action{
	type: string,
	payload: {
		task: Task
	}
}

// initailState の定義
const initialState: TasksState = {
	tasks: []
};

// Action Creater の定義
const addTask = (task: Task) => ({
	type: 'ADD_TASK',
	payload: {
		task
	}
})

function tasksReducer(state: TasksState = initialState, action: TaskAction){
	switch(action.type){
		case 'ADD_TASK':
			return {
				...state,
				tasks: Object.assign(state.tasks, action.payload)
			};
		default:
			return state;
	}
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
