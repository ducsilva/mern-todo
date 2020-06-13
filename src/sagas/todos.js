// import { call, put, takeLatest, all, takeEvery } from "redux-saga/effects";
// import * as TodoApi from "../api/todos";
// import { actions } from "../reducers/TodoReducer";
// import {
//   GET_ALL_TODOS,
//   GET_ALL_TODOS_SUCCESS,
//   GET_ALL_TODOS_FAIL,
// } from "../actions/actionTypes";
// import { actions as todoActions } from "../actions/index";
// import axios from "axios";

// function getAllTodo() {
//   return axios({
//     method: "GET",
//     url: "http://localhost:4000/todos/",
//   });
// }

// function* workerSaga(query) {
//   try {
//     const response = yield call(getAllTodo, query);
//     const data = response.data;

//     // dispatch a success action to the store with the new dog
//     yield put(todoActions.getAllTodoSuccess, data);
//   } catch (error) {
//     // dispatch a failure action to the store with the error
//     yield put(todoActions.getAllTodoFail, error);
//   }
// }

// function* TodoFlow() {
//   yield all([takeLatest(todoActions.getAllTodos, workerSaga)]);
// }

// export default TodoFlow;
