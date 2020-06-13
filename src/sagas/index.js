import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
//import action types
import {
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS,
  GET_ALL_TODOS_FAIL,
} from "../actions/actionTypes";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(GET_ALL_TODOS, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchTodoList() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/todos/",
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchTodoList);
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: GET_ALL_TODOS_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_ALL_TODOS_FAIL, error });
  }
}
