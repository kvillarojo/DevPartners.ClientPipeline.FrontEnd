
import { takeLatest } from "redux-saga/effects";
import * as types from '../../constants/actionTypes';
import rootApplicationSage from './rootApplicationSaga';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* rootWatcherSaga() {
  yield takeLatest(types.API_USER_LOCALSTORAGE_REQUEST, rootApplicationSage);
}