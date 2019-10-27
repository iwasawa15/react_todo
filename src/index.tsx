import React, { FC } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// pure React
// import App from './App';

//Redux
import { createStore, Store } from "redux";

import TodoApp from "./containers/TodoApp";
import tasksReducer from "./reducers/tasks";
import { Provider } from "react-redux";

// pure React
// ReactDOM.render(<App />, document.getElementById('root'));

// Store の定義
const store: Store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
