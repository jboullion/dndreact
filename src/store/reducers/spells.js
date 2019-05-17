// import { playerDiceRoll, calcStatBonus } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
// import { updateObject } from '../utility'

let defaultSpells = [];

//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.spells){
	defaultSpells = actionTypes.localstate.spells;
}else{
	defaultSpells = [
		{
			name: "Vicious Mockery",
			damage: [{num:1,dam:4}],
			vsm: 'V',
			description: 'You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.',
			range: 60,
			duration: 'Instantaneous'
		},
	]
}


const reducer = (state = defaultSpells, action) => {
	//let spell;

	switch(action.type){

		default:
	}

	return state;
}

export default reducer;