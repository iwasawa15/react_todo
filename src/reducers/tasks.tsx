import {
  AddAction,
  ResetAction,
  InputAction,
  INPUT_TASK,
  ADD_TASK,
  RESET_TASK
} from "../actions/tasks";

interface TasksState {
  type: string;
  tasks: string[];
}

// initailState の定義
const initialState: TasksState = {
  type: "",
  tasks: []
};

type TaskAction = AddAction | ResetAction | InputAction;

// tasksReducer の定義
export default function tasksReducer(
  state: TasksState = initialState,
  action: TaskAction
) {
  switch (action.type) {
    case INPUT_TASK:
      return {
        ...state,
        task: action.payload.task
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case RESET_TASK:
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}
