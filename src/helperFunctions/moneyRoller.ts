import Die from '../classes/die.js';

/**
 * @name moneyRoller
 * @param {number} rolls The amount of rolls to do
 * @param {number} dieMax The dice to use
 * @param {number} modifier What to multiply the roll by
 * @param {number} denomination The denomination to add to
 * @param {DiceObject[]} rollArray The array to push the rolls to
 * @returns {number} The updated denomination
 */
function moneyRoller(rolls: number, dieMax: number, modifier: number, denomination: number, rollArray: Die[]): number {
	for(let i = 0; i < rolls; i++){
		const roll = new Die(dieMax);
		denomination += (roll.value * modifier);
		rollArray.push(roll);
	}
	return denomination;
}


export default moneyRoller;