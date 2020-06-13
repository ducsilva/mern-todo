import { connect } from "react-redux";
import TodosList from "../components/TodoList/TodosList";
import { GET_ALL_TODOS } from "../actions/actionTypes";

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    todoList: state.todoList,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodoList: () => dispatch({ type: GET_ALL_TODOS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
