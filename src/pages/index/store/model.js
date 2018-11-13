import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCategoryItems() {
  const resp = yield axios({
    method: 'get',
    url: './head.json'
  });
  yield put({ type: 'SET_CATEGORY_ITEMS', payload: resp.data });
}

function* model() {
  yield takeLatest('GET_CATEGORY_ITEMS', getCategoryItems);
}

export default model;
