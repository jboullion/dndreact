import * as actionTypes from './actionTypes'

export const saveCharacter = (payload) => {
	return {
		type: actionTypes.STAT_UPDATE,
		payload: payload
	}
}