// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
// import { updateObject } from '../utility'

let defaultSpells = [];

let defaultSpell = {
	name: '',
	damage: [],
	vsm: '',
	description: '',
	range: 0,
	duration: ''
};

//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.spells){
	defaultSpells = actionTypes.localstate.spells;
}else{
	defaultSpells = {
		spellModal: false,
		currentSpellIndex: [0,0], //we need 2 dimentional index
		currentSpell: defaultSpell,
		spells: [
			[],[],[],[],[],[],[],[],[],[] // 9 levels of spells
		]
	}
}


const reducer = (state = defaultSpells, action) => {
	//let spell;

	switch(action.type){
		case actionTypes.MODAL_SPELLS:
			return {...openSpellModal(state, action)}
		// case actionTypes.INVENTORY_SPELL:
		// 	return updateObject(state, {currentSpell: updateSpell(state, action)});
		// case actionTypes.INVENTORY_SAVE_SPELL:
		// 	return {...saveSpell(state, action)}
		// case actionTypes.INVENTORY_DELETE_SPELL:
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
 * We need to setup the weapon we want to work with in our modal
 */
const openSpellModal = (state, action) => {
	let currentSpell;

	console.log('Open Modal?');

	//copy our state
	let spells = Object.assign({},state);

	//update the value
	spells.spellModal = !spells.spellModal;

	/*
	//if our paylod is -1 or exists in our weapons then lets set our currentSpell index
	if( action.payload.index === -1){
		currentSpell = defaultSpell;
	}else if(spells.items[action.payload.index] ){
		currentSpell = spells.items[action.payload.index];
	}

	spells.currentSpellIndex = action.payload.index;

	spells.currentSpell = currentSpell;
	*/

	return spells;
}

/*
// Update a weapon in the modal while editing
const updateSpell = (state, action) => {
	let currentSpell = {
		...state.currentSpell
	};

	// Remove leading zeros
	if(! isNaN(action.payload.value)){
		action.payload.value = parseFloat(action.payload.value, 10);
	}

	currentSpell[action.payload.key] = action.payload.value;

	return currentSpell;
}

// Save this weapon from the modal form
const saveSpell = (state, action) => {
	//copy our state
	let inventory = Object.assign({},state);

	//copy our current weapon
	let currentSpell = {
		...state.currentSpell
	};

	//copy our weapons
	if(inventory.currentSpellIndex === -1){
		inventory.items.push(currentSpell);
	}else{
		inventory.items[inventory.currentSpellIndex] = currentSpell;
	}

	return inventory;
}

// Delete a weapon from our equipment
const deleteSpell = (state, action) => {
	//copy our state
	let inventory = Object.assign({},state);

	//copy our items
	if(inventory.currentSpellIndex >= 0){
		inventory.items.splice(inventory.currentSpellIndex,1);

		inventory.itemModal = false;
	}

	return inventory;
}
*/