import * as actionTypes from '../actions/actionTypes'

import { saveCharacter } from './save'


export const statUpdate = (payload) => {
	
	return {
		type: actionTypes.STAT_UPDATE,
		payload: payload
	}

	/*
	return (dispatch, getState) => {
		setTimeout( () => {
			// const stats = getState().stats;
			// console.log(stats);
			dispatch(saveCharacter(payload));
		},1000);
	};
	*/
};
