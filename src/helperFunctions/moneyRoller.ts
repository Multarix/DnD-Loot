import numberGenerator from './numberGenerator.js';
import { DieInstance } from '../../interfaces.js';
/**
 * @name moneyRoller
 * @param {number} rolls The amount of rolls to do
 * @param {number} dieMax The dice to use
 * @param {number} modifier What to multiply the roll by
 * @param {number} denomination The denomination to add to
 * @param {DiceObject[]} rollArray The array to push the rolls to
 * @returns {number} The updated denomination
**/
function moneyRoller(rolls: number, dieMax: number, modifier: number, denomination: number, rollArray: DieInstance[]): number {
	for(let i = 0; i < rolls; i++){
		const roll = numberGenerator(1, dieMax);
		denomination += (roll * modifier);
		rollArray.push({ value: roll, dieSides: dieMax });
	}
	return denomination;
}


export default moneyRoller;
// rollArray = [{roll: 2, dice: "d6"}, {roll: 5, dice: "d6"}, {4, roll: dice: "d6"}, {roll: 2, dice: "d6"}, {roll: 1, dice: "d6"}, {roll: 6, dice: "d6"}]