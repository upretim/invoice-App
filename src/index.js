import React from 'react';
import ReactDOM from 'react-dom';
 import { Provider } from "react-redux";
 import { render } from "react-dom";
 import store from './store/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
render(
    <Provider store={store}>
      <App />
   </Provider>,
    document.getElementById("root")
  );
  
serviceWorker.unregister();
