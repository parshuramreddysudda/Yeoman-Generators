import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Dashboard';
import AuthHelper from  './Auth/AuthHelper'

ReactDOM.render(<Provider store={store}>

  <Dashboard/>

</Provider>, document.getElementById('root'));
