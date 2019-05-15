// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

let defaultEquipment = {
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
			value: 0,
			multiple: 1
		},
		{
			name: 'Silver',
			initial: 'sp',
			value: 0,
			multiple: 10
		},
		{
			name: 'Electrum ',
			initial: 'ep',
			value: 0,
			multiple: 50
		},
		{
			name: 'Gold',
			initial: 'gp',
			value: 0,
			multiple: 100
		},
		{
			name: 'Platinum',
			initial: 'pp',
			value: 0,
			multiple: 1000
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
};


//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.equipment){
	defaultEquipment = actionTypes.localstate.equipment;
}


const reducer = (state = defaultEquipment, action) => {
	let equipment, money, moneies;

	switch(action.type){
		/*
		case actionTypes.EQUIP_UPDATE:

			//copy our state
			equipment = Object.assign({},state);

			//update the value
			equipment[action.payload.index] = action.payload.value;

			return updateObject(state, equipment);
			*/
		case actionTypes.EQUIP_MONEY:

			//copy our state
			money = {
				...state.money[action.payload.index]
			};

			moneies = [...state.money];
			
			//update our die with the value of our input
			money.value = parseInt(action.payload.value);

			//update the stats at the correct index
			moneies[action.payload.index] = money;

			return updateObject(state, {money: moneies});
		default:
	}

	return state;
}

export default reducer;