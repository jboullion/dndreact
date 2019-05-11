// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actions'

const defaultModals = {
	account: false,
	signin: false,
	weapon:false
}

const reducer = (state = defaultModals, action) => {
	let modals;

	switch(action.type){
		case actionTypes.MODAL_TOGGLE:
			
			//copy our state
			modals = Object.assign({},state);

			//update the value
			modals[action.payload.index] = !modals[action.payload.index];

			console.log(modals[action.payload.index]);
			
			return {
				...modals
			}
		default:
	}

	return state;
}

export default reducer;