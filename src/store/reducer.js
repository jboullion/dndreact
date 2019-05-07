const initialState = {
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
	switch(action.type){
		case 'UPDATE_STAT':
			//copy needed stat
			const stat = {
				...state.stats[action.payload.index]
			};

			//update our die with the value of our input
			stat.value = action.payload.value;

			//copy our state dice
			const stats = [...state.stats];

			//update the stats at the correct index
			stats[action.payload.index] = stat;

			return {
				...state,
				stats: stats
			}
		default:

	}

	return state;
}

export default reducer;