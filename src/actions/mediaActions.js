import * as types from '../constants/actionTypes';

export const dogRequest = (dogsample) => ({
    type: types.API_CALL_REQUEST,
    dogsample
});