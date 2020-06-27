import { connect } from "react-redux";
import { CREATE_TODO } from "../actions/actionTypes";
import CreateTodo from "../components/CreateTodo/CreateTodo";

const mapStateToProps = (state) => ({
  isFetching: state.fetching,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (newTodo) => dispatch({ type: CREATE_TODO, newTodo }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
