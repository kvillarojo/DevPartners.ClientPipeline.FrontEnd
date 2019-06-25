import { call, put } from "redux-saga/effects";
import * as types from '../constants/actionTypes';
import axios from "axios";

// function that makes the api request and returns a Promise for response
function fetchDog() {
    return axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
    
}

// worker saga: makes the api call when watcher saga sees the action
export default function* workerSaga({dogsample}) {
    try {
      const response = yield call(fetchDog);
      const dog = response.data.message;
      console.log('sdfdsfsf');
      console.log(dogsample);
  
      // dispatch a success action to the store with the new dog
      yield put({ type: types.API_CALL_SUCCESS, dog });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: types.API_CALL_FAILURE, error });
    }
  }