// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
// import { updateObject } from '../utility'

let defaultSpells = [];

let defaultSpell = {
	name: 'Test Name',
	damage: [],
	vsm: 'VSM',
	description: 'Cool description',
	range: 0,
	duration: '',
	level: 0,
	numDice: 1,
	diceValue: 6,
	bonus: 0,
};

//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.spells){
	//defaultSpells = actionTypes.localstate.spells;
}else{
	defaultSpells = {
		spellModal: false,
		currentSpellIndex: -1, //we need 2 dimentional index
		currentSpell: defaultSpell,
		spells: []
	}
}


const reducer = (state = defaultSpells, action) => {
	//let spell;

	switch(action.type){
		case actionTypes.MODAL_SPELLS:
			return {...openSpellModal(state, action)}
		// case actionTypes.SPELLS_SPELL:
		// 	return updateObject(state, {currentSpell: updateSpell(state, action)});
		case actionTypes.SPELLS_SAVE_SPELL:
			return {...saveSpell(state, action)}
		// case actionTypes.SPELLS_DELETE_SPELL:
		// 	return {...deleteSpell(state, action)}
		default:
	}

	return state;
}

export default reducer;



/**
 * FUNCTIONS
 */

/**
 * We need to setup the spell we want to work with in our modal
 */
const openSpellModal = (state, action) => {
	//copy our state
	let spells = Object.assign({},state);

	//update the value
	spells.spellModal = !spells.spellModal;

	//if our paylod is -1 or exists in our weapons then lets set our currentSpell index
	if( action.payload.index === -1){
		console.log('Default Spell');
		spells.currentSpell = defaultSpell;
		spells.currentSpellIndex = -1;
	}else if(action.payload.index && action.payload.level && spells.spells[action.payload.level][action.payload.index] ){
		console.log('Set Spell: '+action.payload.level+', '+action.payload.index);
		//spells.currentSpell = spells.spells[action.payload.level][action.payload.index];
		spells.currentSpellIndex = [action.payload.level,action.payload.index];
	}

	return spells;
}


// // Update a weapon in the modal while editing
// const updateSpell = (state, action) => {
// 	let currentSpell = {
// 		...state.currentSpell
// 	};

// 	// Remove leading zeros
// 	if(! isNaN(action.payload.value)){
// 		action.payload.value = parseFloat(action.payload.value, 10);
// 	}

// 	currentSpell[action.payload.key] = action.payload.value;

// 	return currentSpell;
// }

// Save this weapon from the modal form
const saveSpell = (state, action) => {
	//copy our state
	let spells = Object.assign({},state);

	//copy our current weapon
	let currentSpell = {
		...state.currentSpell
	};

	//copy our weapons
	if(spells.currentSpellIndex === -1){
		spells.spells.push(currentSpell);
	}else if(spells.currentSpellIndex && spells.currentSpellIndex.length){
		// equipment.weapons[equipment.currentWeaponIndex] = currentWeapon;
		//spells.spells[spells.currentSpellIndex[0]][spells.currentSpellIndex[1]] = currentSpell;
	}

	return spells;
}

// // Delete a weapon from our equipment
// const deleteSpell = (state, action) => {
// 	//copy our state
// 	let inventory = Object.assign({},state);

// 	//copy our items
// 	if(inventory.currentSpellIndex >= 0){
// 		inventory.items.splice(inventory.currentSpellIndex,1);

// 		inventory.itemModal = false;
// 	}

// 	return inventory;
// }