import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions'

const defaultStats = {
	//STATS
	recentStatRoll: { 
		roll: 0,
		bonus: 0,
		prof: false 
	},
	stats: [
		{
			name: 'Strength',
			shortname: 'Str',
			value: 10,
			prof: false,
		},
		{
			name: 'Dexterity',
			shortname: 'Dex',
			value: 10,
			prof: false,
		},
		{
			name: 'Constitution',
			shortname: 'Con',
			value: 10,
			prof: false,
		},
		{
			name: 'Intellegence',
			shortname: 'Int',
			value: 10,
			prof: false,
		},
		{
			name: 'Wisdom',
			shortname: 'Wis',
			value: 10,
			prof: false,
		},
		{
			name: 'Charisma',
			shortname: 'Cha',
			value: 10,
			prof: false,
		},
	]
}

const reducer = (state = defaultStats, action) => {
	let stat, stats;

	switch(action.type){
		case actionTypes.STAT_UPDATE:
			//copy needed stat
			stat = {
				...state.stats[action.payload.index]
			};

			//update our die with the value of our input
			stat.value = parseInt(action.payload.value);

			//copy our state dice
			stats = [...state.stats];

			//update the stats at the correct index
			stats[action.payload.index] = stat;

			return {
				...state,
				stats: stats
			}
		case actionTypes.STAT_TOGGLE:
			//copy needed stat
			stat = {
				...state.stats[action.payload.index]
			};

			//update our die with the value of our input
			stat.prof = !stat.prof;

			//copy our state dice
			stats = [...state.stats];

			//update the stats at the correct index
			stats[action.payload.index] = stat;

			return {
				...state,
				stats: stats
			}
		case actionTypes.STAT_ROLL:

			let roll = playerDiceRoll(20);
			let recentStatRoll =  {
				roll: roll,
				bonus: calcStatBonus(action.payload.stat),
				prof: action.payload.stat.prof
			}// + '  + ' + action.payload.stat.bonus + ' = ' + (roll + action.payload.stat.bonus);		
			
			return {
				...state,
				recentStatRoll: recentStatRoll
			}
			
		default:

	}

	return state;
}

export default reducer;