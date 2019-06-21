import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeComponent.css';

//https://stackblitz.com/edit/react-redux-registration-login-example

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var invoiceArray = [{
                    invoiceId: 'ALS/19-20/001',
                     key:'ALS001'
                    }, 
        {invoiceId: 'ALS/19-20/002',
        key:'ALS002'}, 
        {invoiceId: 'ALS/19-20/003',
        key:'ALS003'}];
        return (
            <div className="container">
                <button className="btn btn-primary">Create Invoice</button>

                <ul>
                {invoiceArray.map(function(invoice, index){
                    return <li key={ invoice.key }>{invoice.invoiceId}</li>;
                  })}
            </ul>
          </div>
        )
    }
}
export default connect(null, null, null)(HomeComponent);
