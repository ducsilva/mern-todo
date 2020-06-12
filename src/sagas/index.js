import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchTodos() {

    const json = yield fetch('http://localhost:4000/todos/')
        .then(response => response.json());

    yield put({ type: "TODOS_RECEIVED", json: json.articles || [{ error: json.message }] });
}

function* actionWatcher() {
    yield takeLatest('GET_TODOS', fetchTodos)
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}