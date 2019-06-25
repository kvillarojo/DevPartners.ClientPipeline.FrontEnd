import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState.registerState, action) {
    switch (action.type) {
      case types.REGISTER_REQUESTED:
	     	return  {
	     		...state, 
	     		fetching: true, 
	     		details: action.registerUserDetails 
	     	};
    case types.REGISTER_REQUEST_SUCCESS:
      return { 
      	...state,
      	error: action.error,
        message: action.message,
        isRegistered: true
      };
    default:
      return state;
    }
}