import { playerDiceRoll } from '../../functions'
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


let defaultSkills = {};

//The default stats if nothing loaded
if(actionTypes.localstate && actionTypes.localstate.skills){
	defaultSkills = actionTypes.localstate.skills;
}else{
	defaultSkills = {
		//SKILLS
		recentSkillRoll: { 
			roll: 0,
			bonus: 0,
			prof: false 
		},
		skills: [{
			name: "Acrobatics",
			stat: 1,
			prof: 0, //skill can be double proficiency. 0,1,2
			adv: false
		}, {
			name: "Animal Handling",
			stat: 4,
			prof: 0,
			adv: false
		}, {
			name: "Arcana",
			stat: 3,
			prof: 0,
			adv: false
		}, {
			name: "Athletics",
			stat: 0,
			prof: 0,
			adv: false
		}, {
			name: "Deception",
			stat: 5,
			prof: 0,
			adv: false
		}, {
			name: "History",
			stat: 3,
			prof: 0,
			adv: false
		}, {
			name: "Insight",
			stat: 4,
			prof: 0,
			adv: false
		}, {
			name: "Intimidation",
			stat: 5,
			prof: 0,
			adv: false
		}, {
			name: "Investigation",
			stat: 3,
			prof: 0,
			adv: false
		}, {
			name: "Medicine",
			stat: 4,
			prof: 0,
			adv: false
		}, {
			name: "Nature",
			stat: 3,
			prof: 0,
			adv: false
		}, {
			name: "Perception",
			stat: 4,
			prof: 0,
			adv: false
		}, {
			name: "Performance",
			stat: 5,
			prof: 0,
			adv: false
		}, {
			name: "Persuasion",
			stat: 5,
			prof: 0,
			adv: false
		}, {
			name: "Religion",
			stat: 3,
			prof: 0,
			adv: false
		}, {
			name: "Sleight of Hand",
			stat: 1,
			prof: 0,
			adv: false
		}, {
			name: "Stealth",
			stat: 1,
			prof: 0,
			adv: false
		}, {
			name: "Survival",
			stat: 4,
			prof: 0,
			adv: false
		}]
		
	}
}

const reducer = (state = defaultSkills, action) => {
	let skill, skills;

	switch(action.type){

		case actionTypes.SKILL_PROF:
			skill = {
				...state.skills[action.payload.index]
			};
			skills = [...state.skills];
			
			//update our die with the value of our input
			if(skill.prof >= 2){
				skill.prof = 0;
			}else{
				skill.prof++;
			}

			//update the stats at the correct index
			skills[action.payload.index] = skill;

			return updateObject(state, {skills: skills});
		case actionTypes.SKILL_ADV:
			skill = {
				...state.skills[action.payload.index]
			};
			skills = [...state.skills];
			
			//update our die with the value of our input
			skill.adv = !skill.adv;

			//update the stats at the correct index
			skills[action.payload.index] = skill;

			return updateObject(state, {skills: skills});

		case actionTypes.SKILL_ROLL:
			let roll = playerDiceRoll();
			let advRoll = playerDiceRoll();

			let recentSkillRoll =  {
				roll: roll,
				bonus: action.payload.bonus,
				prof: action.payload.skill.prof,
				adv: action.payload.skill.adv,
				advRoll: advRoll
			}	

			return updateObject(state, {recentSkillRoll: recentSkillRoll});
		default:

	}

	return state;
}

export default reducer;