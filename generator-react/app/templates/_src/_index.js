import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import <%= appName %> from './<%= appName %>';

ReactDOM.render(
  <React.StrictMode>
    <<%= appName %> />
  </React.StrictMode>,
  document.getElementById('root')
);

