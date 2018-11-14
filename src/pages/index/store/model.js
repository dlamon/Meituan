import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCategoryItems() {
  const resp = yield axios({
    method: 'get',
    url: './head.json'
  });
  yield put({ type: 'SET_CATEGORY_ITEMS', payload: resp.data });
}

function* getHomeList() {
  const resp = yield axios({
    method: 'get',
    url: './homelist.json'
  });
  yield put({ type: 'SET_HOME_LIST', payload: resp.data });
}

function* model() {
  yield takeLatest('GET_CATEGORY_ITEMS', getCategoryItems);
  yield takeLatest('GET_HOME_LIST', getHomeList);
}

export default model;
