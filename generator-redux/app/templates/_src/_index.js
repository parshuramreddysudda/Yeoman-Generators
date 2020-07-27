import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import <%= appName %> from './<%= appName %>';

ReactDOM.render(<Provider store={store}>

  <<%= appName %>/>

</Provider>, document.getElementById('root'));
