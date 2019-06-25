import { call, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import axios from 'axios'

const url = 'https://cors-anywhere.herokuapp.com/https://devpartners.co/call-center-services/api_dpcrm/';

// function that makes the api request and returns a Promise for response
function registerUser (loginCredentials) {
	const {username, email, password, firstName, lastName} = loginCredentials
	return axios.post(url + `/api/Auth/Create`, {username, email, firstName, lastName, password})
	  .then(response => {
	    return true
	  })
	  .catch(error => {
	    throw(error);
	  });
}

// worker saga: makes the api call when watcher saga sees the action
export default function * registerSaga ({ registerUserDetails }) {

  try {
    const register = yield call(registerUser, registerUserDetails);

    if (register) {
      yield put({
        type: types.REGISTER_REQUEST_SUCCESS,
        message: 'Register'
      })
    } else {
      yield put({ type: types.REGISTER_REQUEST_DETAILES, credentials: register });
    }
     
  } catch (error) {
    yield put({ type: types.REGISTER_REQUEST_FAILED, error });
  }
}

// export default function* watcherSaga() {
//   yield takeLatest(types.REGISTER_REQUESTED, loginSaga);
// }
