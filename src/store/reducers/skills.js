// import { playerDiceRoll, calcStatBonus } from '../../functions'
// import * as actionTypes from '../actions'

const defaultStats = {
	//SKILLS
	recentSkillRoll: { 
		roll: 0,
		bonus: 0,
		prof: false 
	},
	skills: [
		{
			name: 'Acrobatics',
			stat: 'Dex',
			bonus: -4,
			prof: false,
			adv: false,
		},
		{
			name: 'Animal Handling',
			stat: 'Wis',
			bonus: -4,
			prof: false,
			adv: false,
		}
	]
}

const reducer = (state = defaultStats, action) => {
	// let skill, skills;

	switch(action.type){



	}

	return state;
}

export default reducer;