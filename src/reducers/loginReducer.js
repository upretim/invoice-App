import initialState from './initialState';
import {userConstants} from './../actions/actionTypes';

export default function loginReducer(state = initialState, action){
  console.log('initial state ', state);
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            console.log('initial state ', state);
            return state; 
        case userConstants.LOGIN_SUCCESS:
            console.log('initial state  action.payload ', action.payload);
            return action.payload; 
          case userConstants.LOGIN_FAILURE:
            return state;
        default:
          return state
       }
}