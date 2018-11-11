import { put, takeLatest } from 'redux-saga/effects';

function* setNum(action) {
  yield put({ type: 'ADD_TODO_FINISH', payload: action.payload });
}

function* model() {
  yield takeLatest('ADD_TODO', setNum);
}

export default model;
