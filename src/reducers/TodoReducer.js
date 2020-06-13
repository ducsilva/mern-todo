// import { fromJS } from "immutable";
// import {
//   GET_ALL_TODOS_SUCCESS,
//   GET_ALL_TODOS,
//   GET_ALL_TODOS_FAIL,
// } from "../actions/actionTypes";

// export const fetchingObj = {};

// const initialState = {
//   todoList: [],
//   isFetching: false,
//   errorMsg: "",
//   totalRecord: 0,
// };

// // export const getTodoList = ({ todoList }) => todoList.get("todoList");
// // export const getTodoIsFetching = ({ todoList }) =>
// //   todoList.get("fetching").isFetching;

// const todoReducer = (state = initialState, action) => {
//   debugger;
//   console.log(action.type);
//   switch (action.type) {
//     case GET_ALL_TODOS:
//       return { ...state, isFetching: true };
//     case GET_ALL_TODOS_SUCCESS:
//       return {
//         ...state,
//         todoList: action.data,
//         isFetching: false,
//         errorMsg: "",
//       };
//     case GET_ALL_TODOS_FAIL:
//       return {
//         ...state,
//         isFetching: false,
//         errorMsg: action.message,
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;
