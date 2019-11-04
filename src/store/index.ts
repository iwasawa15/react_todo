import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import tasksReducer from "../reducers/tasks";
import { History } from "history";

const createStore = (history: History) => {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer
    }),
    applyMiddleware(routerMiddleware(history))
  );
};

export default createStore;
