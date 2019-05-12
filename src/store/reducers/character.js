// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

let defaultCharacter = {};

//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.character){
	defaultCharacter = actionTypes.localstate.character;
}else{
	defaultCharacter = {
		HP: 8,
		tempHP: 0,
		maxHP: 8,
		AC: 10,
		tempAC: 0,
		hitdie: 1,
		//hitdie: [4,6,8,10,12], // 4,6,8,10,12 is possible with multiclassing
		profBonus: 2, //Should this just be prof? or proficiency? 
		profBonusLock: true, //allows user to change their profBonus
		init: 0, //all bonuses separate from stat bonus
		initLock: true, //allows user to change their init
		insight: 10, //all bonuses separate from stat bonus
		insightLock: true, //allows user to change their passive insight
		perception: 10, //all bonuses separate from stat bonus
		perceptionLock: true, //allows user to change their passive perception
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
}


const reducer = (state = defaultCharacter, action) => {
	let character;

	switch(action.type){
		case actionTypes.CHAR_UPDATE:

			//copy our state
			character = Object.assign({},state);

			//update the value
			character[action.payload.index] = action.payload.value;

			return updateObject(state, character);

		case actionTypes.CHAR_LOCK_UPDATE:
			//Only let the character update the some stats when they are unlocked, otherwise they are tied to the stats
			//copy our state
			character = Object.assign({},state);

			//update the value
			if(! character[action.payload.index+'Lock']){
				character[action.payload.index] = parseInt(action.payload.value);
			}

			return updateObject(state, character);

		default:
	}

	return state;
}

export default reducer;