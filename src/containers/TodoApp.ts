import { addTask, inputTask } from "../actions/tasks";
import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import { Dispatch } from "redux";

interface StateProps {
  task: string;
  tasks: string[];
}

interface DispatchProps {
  addTask: (task: string) => void;
  inputTask: (task: string) => void;
}

const mapStateToProps = (state: StateProps): StateProps => {
  return {
    task: state.task,
    tasks: state.tasks
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
