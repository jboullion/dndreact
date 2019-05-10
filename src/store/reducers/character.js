// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions'

const defaultCharacter = {
	HP: 8,
	tempHP: 0,
	maxHP: 8,
	AC: 10,
	tempAC: 0,
	hitdie: [4,6,8,10,12], // 4,6,8,10,12 is possible with multiclassing
	profBonus: 2,
	profLock: false, //allows user to change their profBonus
	init: 0, //all bonuses separate from stat bonus
	initLock: false, //allows user to change their init
	insight: 0, //all bonuses separate from stat bonus
	insightLock: false, //allows user to change their passive insight
	perception: 0, //all bonuses separate from stat bonus
	perceptionLock: false, //allows user to change their passive perception
	saves: [false,false,false],
	fails: [false,false,false],
	XP: 0,
	level: 1,
	name: '',
	race: '',
	class: '',
	sex: '',
	age: '', //this will just be a string so they can enter whatever
	diety: '',
	background: '',
	alignment: '',
	size: 'Medium',
	height: '',
	weight: '',
	hair: '',
	eyes: ''
}

const reducer = (state = defaultCharacter, action) => {

	switch(action.type){
		case actionTypes.CHAR_UPDATE:

			//copy our state
			let character = Object.assign({},state);

			//update the value
			character[action.payload.index] = action.payload.value;

			return {
				...character
			}

		default:

	}

	return state;
}

export default reducer;