// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

let defaultEquipment = {
	weaponModal:false,
	currentWeaponIndex: -1,
	currentWeapon: { 
		name: 'Default',
		stat: 0,
		hit: 0,
		numDice: 1,
		diceValue: 6,
		bonus: 0,
		type: '' //is this needed?
	}, // -1 === new, 0-n are the indexes of the weapons to display in the modal
	weaponLimit: 3, //The total number of weapons that can be in the equipment tab
	armorModal:false,
	currentArmor: -1, // -1 === new, 0-n are the indexes of the armor to display in the modal
	armorLimit: 3, //The total number of armors that can be in the equipment tab
	gemsModal:false,
	currentGem: -1, // -1 === new, 0-n are the indexes of the gems to display in the modal
	weapons: [
		{ 
			name: 'Not Default',
			stat: 0,
			hit: 0,
			numDice: 1,
			diceValue: 6,
			bonus: 0,
			type: '' //is this needed?
		}
	],
	armor: [
		{
			name: '',
			type: '',
			ac: 10
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
	//defaultEquipment = actionTypes.localstate.equipment;
}


const reducer = (state = defaultEquipment, action) => {
	let equipment, money, moneies, currentWeapon;

	switch(action.type){
		/*
		case actionTypes.EQUIP_UPDATE:

			//copy our state
			equipment = Object.assign({},state);

			console.log(action.payload);

			if(equipment.currentWeaponIndex){
				equipment.currentWeapon[action.payload.index] = action.payload.value;
				return updateObject(state, {currentWeapon: currentWeapon});
			}else{
				//update the value
				equipment[action.payload.key][action.payload.index] = action.payload.value;
				return updateObject(state, {weapons: moneies});
			}
			
			console.log(equipment)
		*/
		
		case actionTypes.EQUIP_MONEY:

			//copy our state
			money = {
				...state.money[action.payload.index]
			};

			moneies = [...state.money];
			
			//update our die with the value of our input
			money.value = parseInt(action.payload.value);

			//no non numbers
			if(isNaN(money.value)){
				money.value = 0;
			}

			//update the money at the correct index
			moneies[action.payload.index] = money;

			return updateObject(state, {money: moneies});
		case actionTypes.MODAL_WEAPON:

			//copy our state
			equipment = Object.assign({},state);

			//update the value
			equipment.weaponModal = !equipment.weaponModal;
			
			//if our paylod is -1 or exists in our weapons then lets set our currentWeapon index
			if( action.payload.index === -1){
				currentWeapon = {
					name: 'Default',
					stat: 0,
					hit: 0,
					numDice: 1,
					diceValue: 6,
					bonus: 0,
					type: '' //Is this needed?
				};
			}else if(equipment.weapons[action.payload.index] ){
				currentWeapon = equipment.weapons[action.payload.index];
			}


			equipment.currentWeaponIndex = action.payload.index;

			equipment.currentWeapon = currentWeapon;

			return {
				...equipment
			}
		case actionTypes.EQUIP_WEAPON:

			//if(state.currentWeaponIndex){

				currentWeapon = {
					...state.currentWeapon
				};

				currentWeapon[action.payload.key] = action.payload.value;
				return updateObject(state, {currentWeapon: currentWeapon});
			/*
			}else{
				let weapon, weapons;

				equipment = Object.assign({},state);

				//copy our state
				weapon = {
					...state.weapons[state.currentWeaponIndex]
				};

				weapons = [...state.weapons];
				
				//update our die with the value of our input
				weapon[action.payload.key] = action.payload.value;

				//update the money at the correct index
				weapons[state.currentWeaponIndex] = weapon;
				
				equipment.weapons = weapons

				return updateObject(state, equipment);
			}
			*/
		default:
	}

	return state;
}

export default reducer;