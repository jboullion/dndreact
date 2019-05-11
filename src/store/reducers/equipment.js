// import { playerDiceRoll, calcStatBonus } from '../../functions'
//import * as actionTypes from '../actions/actions'

const defaultEquipment = {
	weapons: [
		{ 
			name: 'Warhammer',
			hit: 6,
			damage: [
				{
					num: 4,
					dam: 8
				},
				{
					num: 2,
					dam: 4
				},
			],
			range: 80,
			type: 'Blunt'
		}
	],
	armor: [
		{
			name: 'Chainmail',
			type: 'Heavy',
			ac: 16
		}
	],
	money: [
		{
			name: 'Copper',
			initial: 'cp',
			value: 1
		},
		{
			name: 'Silver',
			initial: 'sp',
			value: 10
		},
		{
			name: 'Electrum ',
			initial: 'ep',
			value: 60
		},
		{
			name: 'Gold',
			initial: 'gp',
			value: 100
		},
		{
			name: 'Platinum',
			initial: 'pp',
			value: 1000
		},
	],
	gems: [
		{
			name: 'Ruby',
			number: 10,
			value: 1,
			money: 'gp'
		},
	]
}

const reducer = (state = defaultEquipment, action) => {
	//let character;

	switch(action.type){

		default:
	}

	return state;
}

export default reducer;