import React from 'react';
import logo from './logo.svg';
import './<%= appName %> .css';

function <%= appName %> () {
  return (
    <div className="<%= appName %> ">
      <header className="<%= appName %> -header">
        <img src={logo} className="<%= appName %> -logo" alt="logo" />
        <p>
          Edit <code>src/<%= appName %> .js</code> and save to reload.
        </p>
        <a
          className="<%= appName %> -link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default <%= appName %> ;
