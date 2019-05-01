import React, { Component } from 'react';

import AppCSS from './App.module.css';

import Header from './components/Header';
import Tools from './containers/Tools/Tools';
import AccountModal from './components/AccountModal';
import SigninModal from './components/SigninModal';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      accountShow: false,
      signinShow: false,
    };
  }
  
  //Toggle our create account modal
  toggleAccount = () => {
    this.setState({ accountShow: !this.state.accountShow });
  }

  //Toggle our sign in modal
  toggleSignin = () => {
    this.setState({ signinShow: !this.state.signinShow });
  }

  render() {
    return (
      <div id="App" className={AppCSS.App}>
        <Header toggleAccount={this.toggleAccount} toggleSignin={this.toggleSignin} />
        <Tools />
        <AccountModal show={this.state.accountShow} toggleAccount={this.toggleAccount} />
        <SigninModal show={this.state.signinShow} toggleSignin={this.toggleSignin} />
      </div>
    );
  }
}

export default App;
