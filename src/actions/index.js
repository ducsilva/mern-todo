import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS_FAIL,
} from "./actionTypes";

// action creator
const getAllTodos = (query) => ({
  type: GET_ALL_TODOS,
  query,
});

const getAllTodoSuccess = (data) => ({
  type: GET_ALL_TODOS_SUCCESS,
  data,
});

const getAllTodoFail = (error) => ({
  type: GET_ALL_TODOS_FAIL,
  error,
});

export const actions = {
  getAllTodos,
  getAllTodoSuccess,
  getAllTodoFail,
};
