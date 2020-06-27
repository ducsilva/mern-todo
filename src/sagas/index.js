import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import axios from "axios";
//import action types
import {
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS,
  GET_ALL_TODOS_FAIL,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
} from "../actions/actionTypes";
import { notification, message } from "antd";

// function that makes the api request and returns a Promise for response
function fetchTodoList() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/todos/",
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* getTodoListSaga() {
  try {
    const response = yield call(fetchTodoList);
    const data = response.data;
    yield delay(500);
    // dispatch a success action to the store with the new dog
    yield put({ type: GET_ALL_TODOS_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_ALL_TODOS_FAIL, error });
  }
}

//Function create todo
// function createTodo(newTodo) {
//   return axios({
//     method: "POST",
//     url: "http://localhost:4000/todos/add/",
//     data: newTodo,
//   });
// }

// worker saga: makes the api call when watcher saga sees the action
function* createTodoSaga(payload) {
  try {
    yield delay(500);
    axios
      .post("http://localhost:4000/todos/add/", payload)
      .then((res) => {
        const data = res.data;
        const { message } = data;
        notification.success({ message: message });
      })
      .catch((err) => console.log(err));

    // dispatch a success action to the store with the new dog
    yield put({ type: CREATE_TODO_SUCCESS, payload });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: CREATE_TODO_FAIL, error });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield all([
    takeLatest(GET_ALL_TODOS, getTodoListSaga),
    takeLatest(CREATE_TODO, createTodoSaga),
  ]);
}
