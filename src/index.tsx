import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Action, createStore } from 'redux'

ReactDOM.render(<App />, document.getElementById('root'));

// Action の定義
interface Task{
	task: string
}

interface TasksState{
	tasks: Task[]
}

interface TaskAction extends Action{
	type: string,
	payload: Task
}

// initailState の定義
const initialState: TasksState = {
	tasks: []
};

// Action Creater の定義
const addTask = (task: string) => ({
	type: 'ADD_TASK',
	payload: {
		task
	}
})

// Store の定義
const store = createStore(addTasksReducer);

function handleChange(){
	console.log(store.getState())
}

const unsubscribe = store.subscribe(handleChange)

console.log(store.getState())

store.dispatch(addTask('Storeを学ぶ'));

// tasksReducer の定義
function addTasksReducer(state: TasksState = initialState, action: TaskAction){
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

function resetTasksReducer(state: TasksState = initialState, action: TaskAction){
	switch(action.type){
		case 'RESET_TASK':
			return {
				...state,
				tasks: []
			};
		default:
			return state;
	}
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
