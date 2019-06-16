//https://stackblitz.com/edit/react-redux-registration-login-example
import React from 'react';
import LoginComponent from './components/login.component/LoginComponent';
import { Route, Link, BrowserRouter} from 'react-router-dom';
import HomeComponent from './components/home.component/HomeComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Route path="/" exact component={LoginComponent}/>
       <Route path="/login" exact component={LoginComponent}/>
       <Route path="/home" component={HomeComponent}/>
    </BrowserRouter>
  );
}

export default App;
