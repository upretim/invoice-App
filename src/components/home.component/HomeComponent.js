import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeComponent.css';

//https://stackblitz.com/edit/react-redux-registration-login-example

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                This is home component...
          </div>
        )
    }
}
export default connect(null, null, null)(HomeComponent);
