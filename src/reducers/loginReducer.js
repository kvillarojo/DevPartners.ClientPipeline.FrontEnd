import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState.logInState, action) {
    switch (action.type) {
      case types.API_LOGIN_REQUEST:
        return { ...state, fetching: true, error: null };
      case types.API_LOGIN_SUCCESS:
          state.isUserlogIn = true
        return { ...state, fetching: false, isUserlogIn: action.userLoggedIn };
      case types.API_LOGIN_CREDENTIAL:
        return { ...state, fetching: false, credentials: action.credentials };
      case types.API_LOGIN_ERROR:
        return { ...state, fetching: false, error: action.error };
      default:
        return state;
    }
}