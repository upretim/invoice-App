import React from 'react';
import LoginComponent from './components/login.component/LoginComponent';
import { Route, Redirect, Link, BrowserRouter } from 'react-router-dom';
import HomeComponent from './components/home.component/HomeComponent';
import LogOut from './components/logout/logout';
import './App.css';
import { connect } from 'react-redux';

function App(props) {

  // if(this.props.isloggeedIn){
  //   this.props.history.push('/home');
  //   return(<div></div>)
  // }
  return (
    <BrowserRouter>
      <Route path="/" exact component={props.isloggeedIn ? HomeComponent : LoginComponent} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/home" component={props.isloggeedIn ? HomeComponent : LoginComponent} />
      <Route path="/logout" component={LogOut} />
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    isloggeedIn: state.login.isloggeedIn
  };
}
export default connect(mapStateToProps, null, null)(App);
