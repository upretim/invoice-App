import React from 'react';
import logo from '../../assets/img/logobg.png';
import './LoginComponent.css';

export class LoginComponent extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                     <div className="alignCenter">
                        <div>
                            <label className="headertext"> Welcome!</label>
                          </div>
                          <img width="320" alt="Arth Lab Supplies Logo" src={logo}/>
                     </div>
          
                  <form className="form-signin">
                    <div className="form-label-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input className="form-control" id="inputEmail" placeholder="Email address" required autoFocus type="email" />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="inputPassword">Password</label> 
                        <input type="password" id="inputPassword" className="form-control"  placeholder="Password" required autoFocus/>
                    </div>
                    <button id="login" type="submit" className="btn btn-primary float-right text-uppercase">Login</button>
                  </form>
              </div>
            </div>
          </div>
        )
    }
}
export default LoginComponent;