import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState.registerState, action) {
  switch (action.type) {
    case types.COMPANY_REQUESTED:
      return  {
        ...state, 
        fetching: true
      };
  case types.COMPANY_REQUEST_SUCCESS:
    return { 
      ...state,
      fetching:false,
      message: action.message
    };
  case types.COMPANY_REQUEST_FAILED:
    return { 
      ...state,
      fetching:false,
      message: action.message
    };
  case types.REMOVE_ENTITY_REQUEST:
    return { 
      ...state,
      fetching:true,
      message: action.message
    };
  case types.REMOVE_ENTITY_REQUEST_SUCCESS:
    return { 
      ...state,
      fetching:false,
      message: action.message,
      status:action.status
    };
  case types.REMOVE_ENTITY_REQUEST_FAILED:
    return { 
      ...state,
      fetching:false,
      message: action.message,
      status: action.status
    };
  default:
    return state;
  }
}