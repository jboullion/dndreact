import { playerDiceRoll } from '../functions' //numericSort

const initialState = {
	recentStatRoll: 0,
	stats: [
		{
			name: 'Strength',
			shortname: 'Str',
			value: 16,
			bonus: -4,
			prof: false,
		},
		{
			name: 'Dexterity',
			shortname: 'Dex',
			value: 16,
			bonus: 4,
			prof: false,
		},
		{
			name: 'Constitution',
			shortname: 'Con',
			value: 16,
			bonus: 4,
			prof: false,
		},
		{
			name: 'Intellegence',
			shortname: 'Int',
			value: 16,
			bonus: 4,
			prof: false,
		},
		{
			name: 'Wisdom',
			shortname: 'Wis',
			value: 16,
			bonus: 4,
			prof: false,
		},
		{
			name: 'Charisma',
			shortname: 'Cha',
			value: 16,
			bonus: 4,
			prof: false,
		},
	]
}

const reducer = (state = initialState, action) => {
	let stat, stats;

	switch(action.type){
		case 'STAT_UPDATE':
			//copy needed stat
			stat = {
				...state.stats[action.payload.index]
			};

			//update our die with the value of our input
			stat.value = action.payload.value;

			//copy our state dice
			stats = [...state.stats];

			//update the stats at the correct index
			stats[action.payload.index] = stat;

			return {
				...state,
				stats: stats
			}
		case 'STAT_TOGGLE':
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
		case 'STAT_ROLL':

			let roll = playerDiceRoll(20);
			let recentStatRoll =  roll + '  + ' + action.payload.stat.bonus + ' = ' + (roll + action.payload.stat.bonus);		
			console.log(recentStatRoll);
			return {
				...state,
				recentStatRoll: recentStatRoll
			}
			
		default:

	}

	return state;
}

export default reducer;