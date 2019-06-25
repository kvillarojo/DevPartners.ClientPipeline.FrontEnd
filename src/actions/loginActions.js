import * as types from '../constants/actionTypes';

export const loginRequestAction = (loginCredentials) => ({
    type: types.API_LOGIN_REQUEST,
    loginCredentials
});