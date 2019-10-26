import { Action } from "redux";

export const ADD_TASK = "ADD_TASK";
export const RESET_TASK = "RESET_TASK";
export const INPUT_TASK = "INPUT_TASK";

// Action の定義
interface Task {
  task: string;
}

export interface AddAction extends Action {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface ResetAction extends Action {
  type: typeof RESET_TASK;
}

export interface InputAction extends Action {
  type: typeof INPUT_TASK;
  payload: Task;
}

// Action Creater の定義
export const addTask = (task: string): AddAction => ({
  type: ADD_TASK,
  payload: {
    task
  }
});

export const resetTask = (): ResetAction => ({
  type: RESET_TASK
});

export const inputTask = (task: string): InputAction => ({
  type: INPUT_TASK,
  payload: {
    task
  }
});
