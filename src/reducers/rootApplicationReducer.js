import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function rootReducer(state = initialState.isAuthenticated, action) {
    switch (action.type) {
        case types.API_USER_LOCALSTORAGE_REQUEST:
      return { isAuthenticated: action.isAuthenticated };
    case types.API_USER_LOCALSTORAGE_SUCCESS:
      return { isAuthenticated: action.isAuthenticated };
    case types.API_USER_LOCALSTORAGE_ERROR:
      return { isAuthenticated: action.isAuthenticated };
    case types.LOGOUT_REQUEST:
        return { isLogout: true };
    default:
      return state;
    }
}