import { put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
 
export default function * logoutSaga () {
    try {
        console.log('logout')
        if(localStorage.clear()){
            yield put({
                type: types.LOGOUT_REQUEST,
                isLogout: true
            })
        }
    
    } catch (error) { 
        yield put({
            type: types.LOGOUT_REQUEST_ERROR,
            message: {
                type: 'error',
                message: error
            }
        })
    }
}
