import * as types from '../constants/actionTypes';

export const registerRequestAction = (registerUserDetails) => ({
    type: types.REGISTER_REQUESTED, 
    registerUserDetails
});