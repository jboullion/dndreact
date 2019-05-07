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
	return state;
}

export default reducer;