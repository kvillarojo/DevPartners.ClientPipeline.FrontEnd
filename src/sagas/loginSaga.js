import { call, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import axios from 'axios'

import Swal from 'sweetalert2'

const url = 'https://cors-anywhere.herokuapp.com/https://devpartners.co/call-center-services/api_dpcrm/'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});


// function that makes the api request and returns a Promise for response
function logInUser (loginCredentials) {
  const username = loginCredentials.username
  const password = loginCredentials.password

  return axios.post(url+`/api/Auth/login`, {username, password})
    .then(response => {
      return response;
    })
    .catch(error => {
      throw(error);
    });
}

// worker saga: makes the api call when watcher saga sees the action
export default function * loginSaga ({ loginCredentials }) {
  try {
    const login = yield call(logInUser, loginCredentials)

    const jsonVal = JSON.parse(login.request.response)
    const tokenString = jsonVal.value

    console.log(login)

    if (login) {
      if(tokenString){
          localStorage.setItem('crm_id', JSON.stringify(tokenString));
          yield put({
            type: types.API_LOGIN_SUCCESS,
            userLoggedIn: true
          })    
      }else{
        yield put({
          type: types.API_LOGIN_SUCCESS,
          userLoggedIn: false
        }) 
      
        Toast.fire({
          type: 'warning',
          title: 'Invalid username / password'
        })
      
      }
    } else {
      yield put({ type: types.API_LOGIN_CREDENTIAL, credentials: login });
    }
  } catch (error) {
    yield put({ type: types.API_CALL_FAILURE, error })
  }
}
