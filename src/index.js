import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App';

import statReducer from './store/reducers/stats';
import skillReducer from './store/reducers/skills';
import characterReducer from './store/reducers/character';

import './css/bootstrap.min.css';
import './css/index.css';
//import './css/fontawesome.min.css';
//import './css/solid.css';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
	stats: statReducer,
	skills: skillReducer,
	char: characterReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
