// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const defaultWeapon = { 
	name: '',
	stat: 0,
	hit: 0,
	numDice: 1,
	diceValue: 6,
	bonus: 0,
	type: '' //is this needed?
};

const defaultArmor = {
	name: '',
	type: '',
	bonus: 0,
	prof: 0,
	ac: 10
};

const defaultGem = {
	name: '',
	number: 1,
	value: 1,
	money: 'gp'
};


let defaultEquipment = {
	weaponModal:false,
	currentWeaponIndex: -1,
	currentWeapon: defaultWeapon, // -1 === new, 0-n are the indexes of the weapons to display in the modal
	//weaponLimit: 3, //The total number of weapons that can be in the equipment tab
	armorModal:false,
	currentArmorIndex: -1,
	currentArmor: defaultArmor,
	//armorLimit: 3, //The total number of armors that can be in the equipment tab
	gemModal:false,
	currentGemIndex: -1,
	currentGem: defaultGem, // -1 === new, 0-n are the indexes of the gems to display in the modal
	weapons: [],
	armor: [],
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
	gems: []
};


//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.equipment){
	//defaultEquipment = actionTypes.localstate.equipment;
}

/**
 * REDUCER
 */
const reducer = (state = defaultEquipment, action) => {

	switch(action.type){
		case actionTypes.EQUIP_MONEY:
			return updateObject(state, {money: updateMoney(state, action)});
		
		case actionTypes.MODAL_WEAPON:
			return {...openWeaponModal(state, action)}
		case actionTypes.EQUIP_WEAPON:
			return updateObject(state, {currentWeapon: updateWeapon(state, action)});
		case actionTypes.EQUIP_SAVE_WEAPON:
			return {...saveWeapon(state, action)}
		case actionTypes.EQUIP_DELETE_WEAPON:
			return {...deleteWeapon(state, action)}
		
		case actionTypes.MODAL_ARMOR:
			return {...openArmorModal(state, action)}
		case actionTypes.EQUIP_ARMOR:
			return updateObject(state, {currentArmor: updateArmor(state, action)});
		case actionTypes.EQUIP_SAVE_ARMOR:
			return {...saveArmor(state, action)}
		case actionTypes.EQUIP_DELETE_ARMOR:
			return {...deleteArmor(state, action)}

		case actionTypes.MODAL_GEMS:
			return {...openGemsModal(state, action)}
		case actionTypes.EQUIP_GEMS:
			return updateObject(state, {currentGem: updateGems(state, action)});
		case actionTypes.EQUIP_SAVE_GEMS:
			return {...saveGems(state, action)}
		case actionTypes.EQUIP_DELETE_GEMS:
			return {...deleteGems(state, action)}

		default:
	}

	return state;
}

export default reducer;


/**
 * FUNCTIONS
 */

// Update our currency
const updateMoney = (state, action) => {
	//copy our state
	let money = {
		...state.money[action.payload.index]
	};

	let moneies = [...state.money];

	//update our die with the value of our input
	money.value = parseInt(action.payload.value);

	//no non numbers
	if(isNaN(money.value)){
		money.value = 0;
	}

	//update the money at the correct index
	moneies[action.payload.index] = money;

	return moneies;
}


/**
 * We need to setup the weapon we want to work with in our modal
 */
const openWeaponModal = (state, action) => {
	let currentWeapon;

	//copy our state
	let equipment = Object.assign({},state);

	//update the value
	equipment.weaponModal = !equipment.weaponModal;

	//if our paylod is -1 or exists in our weapons then lets set our currentWeapon index
	if( action.payload.index === -1){
		currentWeapon = defaultWeapon;
	}else if(equipment.weapons[action.payload.index] ){
		currentWeapon = equipment.weapons[action.payload.index];
	}

	equipment.currentWeaponIndex = action.payload.index;

	equipment.currentWeapon = currentWeapon;

	return equipment;
}

// Update a weapon in the modal while editing
const updateWeapon = (state, action) => {
	let currentWeapon = {
		...state.currentWeapon
	};

	//This hack should remove the leading zeros from inputs
	if(! isNaN(action.payload.value)){
		action.payload.value = parseInt(action.payload.value, 10);
	}

	currentWeapon[action.payload.key] = action.payload.value;

	return currentWeapon;
}

// Save this weapon from the modal form
const saveWeapon = (state, action) => {
	//copy our state
	let equipment = Object.assign({},state);

	//copy our current weapon
	let currentWeapon = {
		...state.currentWeapon
	};

	//copy our weapons
	if(equipment.currentWeaponIndex === -1){
		equipment.weapons.push(currentWeapon);
	}else{
		equipment.weapons[equipment.currentWeaponIndex] = currentWeapon;
	}

	return equipment;
}

// Delete a weapon from our equipment
const deleteWeapon = (state, action) => {
	//copy our state
	let equipment = Object.assign({},state);

	//copy our weapons
	if(equipment.currentWeaponIndex >= 0){
		equipment.weapons.splice(equipment.currentWeaponIndex,1);

		equipment.weaponModal = false;
	}

	return equipment;
}




/**
 * We need to setup the weapon we want to work with in our modal
 */
const openArmorModal = (state, action) => {
	let currentArmor;

	//copy our state
	let equipment = Object.assign({},state);

	//update the value
	equipment.armorModal = !equipment.armorModal;

	//if our paylod is -1 or exists in our weapons then lets set our currentArmor index
	if( action.payload.index === -1){
		currentArmor = defaultArmor;
	}else if(equipment.armor[action.payload.index] ){
		currentArmor = equipment.armor[action.payload.index];
	}

	equipment.currentArmorIndex = action.payload.index;

	equipment.currentArmor = currentArmor;

	return equipment;
}


// Update a weapon in the modal while editing
const updateArmor = (state, action) => {
	let currentArmor = {
		...state.currentArmor
	};

	//This hack should remove the leading zeros from inputs
	if(! isNaN(action.payload.value)){
		action.payload.value = parseInt(action.payload.value, 10);
	}

	currentArmor[action.payload.key] = action.payload.value;

	return currentArmor;
}

// Save this weapon from the modal form
const saveArmor = (state, action) => {
	//copy our state
	let equipment = Object.assign({},state);

	//copy our current weapon
	let currentArmor = {
		...state.currentArmor
	};

	//copy our weapons
	if(equipment.currentArmorIndex === -1){
		equipment.armor.push(currentArmor);
	}else{
		equipment.armor[equipment.currentArmorIndex] = currentArmor;
	}

	return equipment;
}

// Delete a weapon from our equipment
const deleteArmor = (state, action) => {
	//copy our state
	let equipment = Object.assign({},state);

	//copy our armor
	if(equipment.currentArmorIndex >= 0){
		equipment.armor.splice(equipment.currentArmorIndex,1);

		equipment.armorModal = false;
	}

	return equipment;
}







/**
 * We need to setup the weapon we want to work with in our modal
 */
const openGemsModal = (state, action) => {
	let currentGem;

	//copy our state
	let equipment = Object.assign({},state);

	//update the value
	equipment.gemModal = !equipment.gemModal;

	//if our paylod is -1 or exists in our weapons then lets set our currentArmor index
	if( action.payload.index === -1){
		currentGem = defaultGem;
	}else if(equipment.gems[action.payload.index] ){
		currentGem = equipment.gems[action.payload.index];
	}

	equipment.currentGemsIndex = action.payload.index;

	equipment.currentGem = currentGem;

	return equipment;
}


// Update a weapon in the modal while editing
const updateGems = (state, action) => {
	let currentGem = {
		...state.currentGem
	};

	//This hack should remove the leading zeros from inputs
	if(! isNaN(action.payload.value)){
		action.payload.value = parseInt(action.payload.value, 10);
	}

	currentGem[action.payload.key] = action.payload.value;

	return currentGem;
}

// Save this weapon from the modal form
const saveGems = (state, action) => {
	//copy our state
	let equipment = Object.assign({},state);

	//copy our current weapon
	let currentGem = {
		...state.currentGem
	};

	//copy our weapons
	if(equipment.currentGemIndex === -1){
		equipment.gems.push(currentGem);
	}else{
		equipment.gems[equipment.currentGemIndex] = currentGem;
	}

	return equipment;
}

// Delete a weapon from our equipment
const deleteGems = (state, action) => {
	//copy our state
	let equipment = Object.assign({},state);

	//copy our armor
	if(equipment.currentGemsIndex >= 0){
		equipment.gems.splice(equipment.currentGemsIndex,1);

		equipment.gemModal = false;
	}

	return equipment;
}