// good redux tutorial
//https://www.youtube.com/watch?v=OSSpVLpuVWA

import { userConstants } from './actionTypes';
import { userService } from '../services/login/LoginService';


export const login = (email, password) => {
    return dispatch => {
        dispatch(request({email}));
        userService.login(email, password)
            .then(
                user => {
                    console.log('Login success');
                    dispatch(success(user));
                },
                error => {
                    console.log('Login failure');
                    dispatch(failure(error));
                }
            );
    };
}

function request(user) {
    return {
        type: userConstants.LOGIN_REQUEST
    }
}
function success(user) {
    return {
        type: userConstants.LOGIN_SUCCESS,
        payload: {
            userName: user,
            isloggeedIn: true
        }
    }
}
function failure(error) {
    return {
        type: userConstants.LOGIN_FAILURE
    }
}

export const logout = () => {
    userService.logout();
    return {
        type: userConstants.LOGOUT,
        payload: {
            userName: '',
            isloggeedIn: false
        }
    };
}