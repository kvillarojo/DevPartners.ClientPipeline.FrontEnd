
import { takeLatest } from "redux-saga/effects";
import * as types from '../constants/actionTypes';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import logoutSaga from './logoutSaga'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.API_LOGIN_REQUEST, loginSaga);
  yield takeLatest(types.REGISTER_REQUESTED, registerSaga);
  yield takeLatest(types.LOGOUT_REQUEST, logoutSaga);
}