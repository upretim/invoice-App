
// good redux tutorial
//https://www.youtube.com/watch?v=OSSpVLpuVWA

import { userConstants } from './actionTypes';
import { userService } from '../services/login/LoginService';


export const login = (username, password) =>{
    console.log(username +'  '+ password)
    return dispatch => {
        dispatch(request({username}));
        userService.login(username, password)
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
        type: userConstants.LOGIN_REQUEST, user 
       } 
   }
function success(user) { 
   return { 
       type: userConstants.LOGIN_SUCCESS, user 
   } 
}
function failure(error) { 
   return { 
       type: userConstants.LOGIN_FAILURE, error 
   } 
}

export const logout= () =>{
    userService.logout();
    return { type: userConstants.LOGOUT };
}