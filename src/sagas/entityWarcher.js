
import { takeLatest } from "redux-saga/effects";
import * as types from '../constants/actionTypes';
import {getEntity, getEntityListNames, addContacts} from './entitySaga';
 

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* entityWatherSaga() {
    yield takeLatest(types.GET_ENTITY_REQUEST, getEntity);
    yield takeLatest(types.GET_NAME_LIST_REQUEST, getEntityListNames);
    yield takeLatest(types.ADD_CONTACT_REQUEST, addContacts);
}
