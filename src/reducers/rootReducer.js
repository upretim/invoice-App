import {combineReducers} from 'redux';
import initialState from './initialState';
import loginReducer from './loginReducer';
//import Login


const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;