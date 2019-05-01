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
 * @param {*} a 
 * @param {*} b 
 */
export function numericSort(a, b){
	return a - b;
}
