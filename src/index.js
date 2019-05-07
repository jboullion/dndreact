import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';

import reducer from './store/reducer';

import './css/bootstrap.min.css';
import './css/index.css';
//import './css/fontawesome.min.css';
//import './css/solid.css';

import * as serviceWorker from './serviceWorker';


const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
