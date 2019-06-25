import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState.entityState, action) {
  switch (action.type) {
    case types.GET_ENTITY_REQUEST:
      return { ...state, fetching: true };
    case types.GET_ENTITY_REQUEST_SUCCESS:
      return { ...state, data: action.data , tableID: action.tableID};
    case types.GET_ENTITY_REQUEST_FAILED:
      return { ...state, error: action.error, message: action.message };
    case types.GET_NAME_LIST_REQUEST:
      return { ...state, fetching: true };
    case types.GET_NAME_LIST_REQUEST_SUCCESS:
      return { ...state, list: action.data , tableID: action.tableID};
    case types.GET_NAME_LIST_REQUEST_FAILED:
      return { ...state, error: action.error, message: action.message };
    case types.ADD_CONTACT_REQUEST:
      return { ...state, fetching: true };
    case types.ADD_CONTACT_REQUEST_SUCCESS:
      return { ...state, fetch: false, message: action.message};
    case types.ADD_CONTACT_REQUEST_FAILED:
      return { ...state, error: action.error, message: action.message };
    default:
      return state;
  }
}