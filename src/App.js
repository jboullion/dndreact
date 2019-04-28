import React from 'react';
import logo from './logo.svg';
import AppClasses from './App.module.css';

function App() {
  return (
    <div className={AppClasses.App}>
      <header className={AppClasses.AppHeader}>
        <img src={logo} className={AppClasses.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={AppClasses.AppLink}
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

export default App;
