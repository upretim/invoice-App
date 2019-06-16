import React, {Component} from 'react';
import logo from '../../assets/img/logobg.png';
import './LoginComponent.css';
import LoginHeader from '../login.header/LoginHeader';
import {connect} from 'react-redux';
import { login } from '../../actions/loginActions';
import HomeComponent from '../home.component/HomeComponent';
//https://stackblitz.com/edit/react-redux-registration-login-example

class LoginComponent extends Component{

   constructor(props){
    super(props);
     this.state = {
       username: '',
       password:'',
       submitted: false
     }
   }
  handleChange = (e)=> {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit=(e) =>{
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
       this.props.loginRequest(username, password);
    }
}

    render(){
      const { username, password, submitted } = this.state;
        return(
            <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <LoginHeader logo={logo} appTitle = 'Invoice ceration App'/>
                  <form className="form-signin"  onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input className="form-control" id="inputEmail" placeholder="Email address" required autoFocus type="email" name="username" value={username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="inputPassword">Password</label> 
                        <input type="password" id="inputPassword" className="form-control"  placeholder="Password" required autoFocus   name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <button id="login"type="submit" className="btn btn-primary float-right text-uppercase">Login</button>
                  </form>
              </div>
            </div>
          </div>
        )
    }
}


 const mapDispatchToProps=(dispatch) =>{
  return {
    loginRequest: (username, password) => dispatch(login(username, password))
  };
}
export default connect(null, mapDispatchToProps, null)(LoginComponent);
