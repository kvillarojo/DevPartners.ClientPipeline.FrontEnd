
import { takeLatest } from "redux-saga/effects";
import * as types from '../constants/actionTypes';
import {registerCompanySaga, removeCompanySaga, updateCompanySaga} from './companySaga';
 

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* companyWatchSaga() {
    yield takeLatest(types.COMPANY_REQUESTED, registerCompanySaga);
    yield takeLatest(types.REMOVE_ENTITY_REQUEST, removeCompanySaga);
    yield takeLatest(types.UPDATE_ENTITY_REQUEST, updateCompanySaga);
}
