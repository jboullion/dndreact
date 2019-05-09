/**
 * This file contains various standalone functions used throughout our application
 * 
 */

/**
 * Return a random number 1 - max
 * @param int max Maximum value of the random
 * 
 * @return int Random Integer
 */
export function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}


/**
 * Return a random number 1 - max
 * @param int max Maximum value of the random
 * 
 * @return int Random Integer
 */
export function playerDiceRoll(max, adv) {
	if(! adv){
		adv = 1.00;
	}

	//We can give our players a slight advantage if we want
	let playerAdvantage = adv;

	return Math.min(Math.floor((Math.random() * playerAdvantage) * Math.floor(max) ) + 1, max);
}

/**
 * Return a random number min - max
 * @param int min Minimum value of the random
 * @param int max Maximum value of the random
 */
export function getRandomIntRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * The default numeric sort for an array
 * @param number a 
 * @param number b 
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
 * @param {*} statName 
 * @param {*} stats 
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

/** */
export function calcPassive(type, character, stats, skills){
	let skill, passiveValue = 0;

	if(skills){
		skill = skills.find((skill) => {
			if(skill.name === type)
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