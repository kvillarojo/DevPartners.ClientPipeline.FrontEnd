import { call, put } from "redux-saga/effects";
import * as types from '../../constants/actionTypes';

// function that makes the api request and returns a Promise for response
function checkLocalSotrage() {
    const authentication = localStorage.getItem('userToken');

    return (authentication) ? true : false;
}

// worker saga: makes the api call when watcher saga sees the action
export default function* rootApplicationSaga() {
    try {
      const authentication = yield call(checkLocalSotrage);

      yield put({ type: types.API_USER_LOCALSTORAGE_SUCCESS, isAuthenticated: authentication });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: types.API_USER_LOCALSTORAGE_ERROR, error, isAuthenticated: false });
    }
}