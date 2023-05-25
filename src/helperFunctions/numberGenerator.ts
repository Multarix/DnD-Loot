/**
 * @name randomNumber
 * @param {number} min The minimum number that should be returned
 * @param {number} max The maximum number that should be returned
 * @returns {number} A random number between the min and max
**/
function numberGenerator(min: number, max: number){
	if(min === max) return min;

	return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default numberGenerator;