//import action types
import {
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS,
  GET_ALL_TODOS_FAIL,
} from "../actions/actionTypes";
// const API_CALL_REQUEST = "API_CALL_REQUEST";
// const API_CALL_SUCCESS = "API_CALL_SUCCESS";
// const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  todoList: [],
  error: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return { ...state, fetching: true, error: null };
    case GET_ALL_TODOS_SUCCESS:
      return { ...state, fetching: false, todoList: action.data };
    case GET_ALL_TODOS_FAIL:
      return { ...state, fetching: false, todoList: null, error: action.error };
    default:
      return state;
  }
}
