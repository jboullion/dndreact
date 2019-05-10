import React, { Component } from 'react';

import AppCSS from './App.module.css';

import Header from './components/Header';
import Tools from './containers/Tools/Tools';
import Modals from './containers/Tools/Modals';



class App extends Component {

  render() {
    return (
      <div id="App" className={AppCSS.App}>
        <Header />
        <Tools />
        <Modals />
      </div>
    );
  }
}

export default App;
