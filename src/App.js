import React, { Component } from 'react';

import AppCSS from './App.module.css';

// import Button from 'react-bootstrap/Button';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Modal from 'react-bootstrap/Modal';

import Header from './components/Header';
import Tools from './containers/Tools/Tools';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }
  
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div id="App" className={AppCSS.App}>
        <Header />
        <Tools />
      </div>
    );
  }
}

export default App;
