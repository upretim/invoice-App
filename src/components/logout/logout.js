import React from 'react';

const LogOut = (props)=>{
    const redirectToLogin = (event)=>{
    event.preventDefault();
      props.history.push("/login");
      return false;
    }
    return(
        <div>You have logged out successfully. click <a href="#" onClick={redirectToLogin}>here</a> to login again</div>
    )
}
export default LogOut;