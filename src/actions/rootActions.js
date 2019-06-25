import * as types from '../constants/actionTypes';

export const checkLocalStorage = () => ({
    type: types.API_USER_LOCALSTORAGE_REQUEST
});

export const sendLogoutRequest = () => ({
    type: types.LOGOUT_REQUEST
});