import React, { FC } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// pure React
// import App from './App';

//Redux
import { createStore, Store } from 'redux'

import TodoApp from './components/TodoApp'
import tasksReducer from './reducers/tasks';

// pure React
// ReactDOM.render(<App />, document.getElementById('root'));

// Store の定義
const store: Store = createStore(tasksReducer);

const renderApp = (store: Store) => {
	ReactDOM.render(
		<TodoApp store={store}/>,
		document.getElementById('root')
	)	
}

const unsubscribe = store.subscribe(() => renderApp(store))
renderApp(store)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
