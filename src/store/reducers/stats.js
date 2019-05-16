import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

let defaultStats = {};

//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.stats){
	defaultStats = actionTypes.localstate.stats;
}else{
	defaultStats = {
		//STATS
		recentStatRoll: { 
			roll: 0,
			bonus: 0,
			prof: false 
		},
		stats: [
			{
				name: 'Strength',
				abv: 'Str',
				value: 10,
				prof: 0,
			},
			{
				name: 'Dexterity',
				abv: 'Dex',
				value: 10,
				prof: 0,
			},
			{
				name: 'Constitution',
				abv: 'Con',
				value: 10,
				prof: 0,
			},
			{
				name: 'Intellegence',
				abv: 'Int',
				value: 10,
				prof: 0,
			},
			{
				name: 'Wisdom',
				abv: 'Wis',
				value: 10,
				prof: 0,
			},
			{
				name: 'Charisma',
				abv: 'Cha',
				value: 10,
				prof: 0,
			},
		]
	}
}

// Load up our reducer with state mutating functions
const reducer = (state = defaultStats, action) => {
	switch(action.type){
		case actionTypes.STAT_UPDATE:
			return updateObject(state, {stats: statUpdate(state, action)});
		case actionTypes.STAT_TOGGLE:
			return updateObject(state, {stats: statToggle(state, action)});
		case actionTypes.STAT_ROLL:	
			return updateObject(state, {recentStatRoll: statRoll(state, action)});
		default:
	}

	return state;
}

// Update our stats at the specified index
const statUpdate = (state, action) => {
	// Constrain the state values
	if(action.payload.value < 1) action.payload.value = 0;
	if(action.payload.value > 1000) action.payload.value = 1000;

	//copy needed stat
	let stat = {
		...state.stats[action.payload.index]
	};

	//update our die with the value of our input
	stat.value = parseInt(action.payload.value);

	//no non numbers
	if(isNaN(stat.value)){
		stat.value = 1;
	}

	//copy our state dice
	let stats = [...state.stats];

	//update the stats at the correct index
	stats[action.payload.index] = stat;

	return stats;
}

// Toggle Proficiency in a stat
const statToggle = (state, action) => {
	//copy needed stat
	let stat = {
		...state.stats[action.payload.index]
	};

	//update our die with the value of our input
	stat.prof = !stat.prof;

	//copy our state dice
	let stats = [...state.stats];

	//update the stats at the correct index
	stats[action.payload.index] = stat;

	return stats;
}

// Roll a stat and add its bonus
const statRoll = (state, action) => {
	let roll = playerDiceRoll(20);
	let recentStatRoll =  {
		roll: roll,
		bonus: calcStatBonus(action.payload.stat),
		prof: action.payload.stat.prof
	}

	return recentStatRoll;
}

export default reducer;