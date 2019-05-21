/**
 * This file contains various standalone functions used throughout our application
 * 
 */

/**
 * Return a random number 1 - max
 * @param {number} max Maximum value of the random
 * 
 * @return {number} Random Integer
 */
export function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}


/**
 * Return a random number 1 - max
 * @param {number} max Maximum value of the random
 * @param {number} adv Give the player increased rolls ;)
 * 
 * @return int Random Integer
 */
export function playerDiceRoll(max, adv) {
	if(! max){
		max = 20;
	}

	if(! adv){
		adv = 1.00;
	}

	return Math.min(Math.floor((Math.random() * adv) * Math.floor(max) ) + 1, max);
}

/**
 * Return a random number min - max
 * @param {number} min Minimum value of the random
 * @param {number} max Maximum value of the random
 */
export function getRandomIntRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * The default numeric sort for an array
 * @param {number} a 
 * @param {number} b 
 */
export function numericSort(a, b){
	return a - b;
}

/**
 * Get the stat bonus of a specific stat
 * @param object stat 
 */
export function calcStatBonus(stat){
	return Math.floor((stat.value - 10) / 2);
}

/**
 * Get the bonus from any stat by calling its abv
 * @param {string} statName 
 * @param {object} stats 
 * 
 * @return false on fail
 */
export function getStatBonus(statName, stats){
	if(stats && stats.length && isNaN(statName)){
		for(let i = 0; i < stats.length; i++){
			if(stats[i].abv === statName){
				return calcStatBonus(stats[i]);
			}
		}
	}

	return false;
}

 /**
  *  Calculate what to return as the current passive bonus
  * @param {string} name Skill Name that determines the passive (Insight / Perception)
  * @param {object} character 
  * @param {object} stats 
  * @param {object} skills 
  */
export function calcPassive(name, character, stats, skills){
	let skill, passiveValue = 0;
	
	//Check if this passive is locked or unlocked. ie: calc from stats or allow users to edit
	let lcName = name.toLowerCase();
	if(! character[lcName+'Lock']){
		return character[lcName];
	}

	if(skills){
		skill = skills.find((skill) => {
			if(skill.name === name)
				return true;
			else
				return false;
		});
	}

	if(skill){
		passiveValue = 10 + (skill.prof * character.profBonus ) + calcStatBonus(stats[skill.stat]) + (skill.adv?5:0);
	}

	return passiveValue;
}

/**
 * Calculate our proficiency bonus...not perfect, but player can set their own if they want
 * 
 * @param {object} character 
 */
export function calcProf(character){

	//7 plus your level, divided by 4, rounded down."
	let defaultProfBonus = Math.floor((parseInt(character.level) + 7) / 4);

	if(character.profBonusLock){
		return defaultProfBonus;
	}

	return character.profBonus;
}


/**
 * Calculate our initiative. Really more of a Get, but checks if the skill is locked or not
 * 
 * @param {object} character 
 * @param {object} stats 
 */
export function calcInit(character, stats){

	if(character.initLock){
		return getStatBonus('Dex', stats);
	}

	return character.init;
}


/**
 * Decide if an element is valid based on its state
 * 
 * @param {object} formElement The state of the form element to validate
 */
export function elementIsValid(formElement){
	if(! formElement.touched) return true;
	if(formElement.validation && formElement.valid !== true) return formElement.valid;
	return true;
}


/**
 * Check if an input element is valid
 * 
 * @param {*} value The field value to check
 * @param {object} rules the rules / validation to check against
 */
export function checkValidity(formElement){
	let isValid = true;
	let message = '';

	//Required
	if(formElement.validation.required){
		if(formElement.value.trim() === ''){
			isValid = false;
			message = 'Field Required';
		}
	}

	//MinLength
	if(formElement.validation.minLength && isValid){
		if(formElement.value.length < formElement.validation.minLength){
			isValid = false;
			message = 'Must be '+formElement.validation.minLength+' or more characters';
		}
	}

	// MaxLength
	if(formElement.validation.maxLength && isValid){
		if(formElement.value.length > formElement.validation.maxLength){
			isValid = false;
			message = 'Must be '+formElement.validation.maxLength+' or less characters';
		}
	}

	// Email
	// if(formElement.validation.isEmail && isValid){
	// 	if(! /(.+)@(.+){2,}\.(.+){2,}/.test(formElement.value) ){
	// 		isValid = false;
	// 		message = 'Enter a valid email';
	// 	}
	// }

	return {valid:isValid, message:message};
}

/**
 * Calculate our total GP based on how much money we have
 * @param {array} money An array of money objects from the equipment object
 * @param {string} rate The value to return. cp,ep,gp,pp
 */
export function calcMoney(money, rate){
	if(! rate){
		rate = 'gp';
	}

	let totalCP = 0;
	let remainderCP = 0;
	let totalRated = 0;
	let totalString = '';
	let rateMoney = money.find( (element) => {
		return element.initial === rate;
	});

	money.forEach(element => {
		totalCP += element.value * element.multiple; 
	});

	totalRated = totalCP / rateMoney.multiple; //floor or ceil?

	if(rate !== 'cp'){
		remainderCP = totalRated - Math.floor(totalRated);

		remainderCP = Math.round(remainderCP * 100);
		//totalString = ' '+remainderCP+'cp';
	}

	totalRated = Math.floor(totalRated);
	totalString = ''+totalRated+rate+' '+remainderCP+'cp';

	return totalString;
}