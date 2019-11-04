import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// pure React
// import App from './App';

//Redux
import { Store } from "redux";

import TodoApp from "./containers/TodoApp";
import { Provider } from "react-redux";
import { createBrowserHistory, History } from "history";
import createStore from "./store";
import { ConnectedRouter } from "react-router-redux";

// pure React
// ReactDOM.render(<App />, document.getElementById('root'));

// history
const history: History = createBrowserHistory();

// Store の定義
const store: Store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TodoApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
