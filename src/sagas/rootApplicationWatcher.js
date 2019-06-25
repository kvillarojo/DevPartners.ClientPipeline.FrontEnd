
import { takeLatest } from "redux-saga/effects";
import * as types from '../constants/actionTypes';
import loginSaga from './loginSaga';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.API_USER_LOCALSTORAGE_REQUEST, loginSaga);
}