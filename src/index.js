import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk  from 'redux-thunk'

import App from './App';

import statReducer from './store/reducers/stats';
import skillReducer from './store/reducers/skills';
import characterReducer from './store/reducers/character';
import equipmentReducer from './store/reducers/equipment';
import spellsReducer from './store/reducers/spells';
import modalReducer from './store/reducers/modals';

import './css/bootstrap.min.css';
import './css/index.css';
//import './css/fontawesome.min.css';
//import './css/solid.css';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
	stats: statReducer,
	skills: skillReducer,
	character: characterReducer,
	equipment: equipmentReducer,
	spells: spellsReducer,
	modal: modalReducer
});

const logger = store => {
	return next => {

		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);

			localStorage.setItem('DND_STATE', JSON.stringify(store.getState()) );

			console.log('[Middleware] next state', store.getState());
			return result;
		}
	}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(logger, thunk)
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
