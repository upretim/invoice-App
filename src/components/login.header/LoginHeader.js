import React, {Component} from 'react';
import './LoginHeader.css';

class LoginHeader extends Component{
    render(){
        return(
          <div className="alignCenter">
            <div>
              <label className="headertext"> Welcome to  {this.props.appTitle}!</label>
            </div>
            <img width="320" alt="Arth Lab Supplies Logo" src={this.props.logo}/>
         </div>
        )
    }
}
export default LoginHeader;