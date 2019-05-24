/**
 * We may want to break this reducer up? 
 * It shouldn't get much buigger and actually could be condensed quite a bit once we know that the functions can be combined.
 */

// import { playerDiceRoll, numericSort } from '../../functions' // calcStatBonus
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const defaultItem = {
	name: '',
	count: 1,
	cost: 1, //this value is in copper pieces PER item. ALWAYS CONVERT TO COPPER!!! please
	weight: 1.0,
};


let defaultInventory = {
	itemModal: false,
	currentItemIndex: -1,
	currentItem: defaultItem,
	items: []
};


//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.inventory){
	defaultInventory = actionTypes.localstate.inventory;
}

/**
 * REDUCER
 */
const reducer = (state = defaultInventory, action) => {

	switch(action.type){
		case actionTypes.MODAL_ITEMS:
			return {...openItemModal(state, action)}
		case actionTypes.INVENTORY_ITEMS:
			return updateObject(state, {currentItem: updateItem(state, action)});
		case actionTypes.INVENTORY_SAVE_ITEMS:
			return {...saveItem(state, action)}
		case actionTypes.INVENTORY_DELETE_ITEMS:
			return {...deleteItem(state, action)}

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
const openItemModal = (state, action) => {
	let currentItem;

	//copy our state
	let inventory = Object.assign({},state);

	//update the value
	inventory.itemModal = !inventory.itemModal;

	//if our paylod is -1 or exists in our weapons then lets set our currentItem index
	if( action.payload.index === -1){
		currentItem = defaultItem;
	}else if(inventory.items[action.payload.index] ){
		currentItem = inventory.items[action.payload.index];
	}

	inventory.currentItemIndex = action.payload.index;

	inventory.currentItem = currentItem;

	return inventory;
}


// Update a weapon in the modal while editing
const updateItem = (state, action) => {
	let currentItem = {
		...state.currentItem
	};

	// Remove leading zeros
	if(! isNaN(action.payload.value)){
		action.payload.value = parseFloat(action.payload.value, 10);
	}

	currentItem[action.payload.key] = action.payload.value;

	return currentItem;
}

// Save this weapon from the modal form
const saveItem = (state, action) => {
	//copy our state
	let inventory = Object.assign({},state);

	//copy our current weapon
	let currentItem = {
		...state.currentItem
	};

	//copy our weapons
	if(inventory.currentItemIndex === -1){
		inventory.items.push(currentItem);
	}else{
		inventory.items[inventory.currentItemIndex] = currentItem;
	}

	return inventory;
}

// Delete a weapon from our equipment
const deleteItem = (state, action) => {
	//copy our state
	let inventory = Object.assign({},state);

	//copy our items
	if(inventory.currentItemIndex >= 0){
		inventory.items.splice(inventory.currentItemIndex,1);

		inventory.itemModal = false;
	}

	return inventory;
}




