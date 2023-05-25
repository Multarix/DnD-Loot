import numberGenerator from './numberGenerator.js';
import { Gems, Art } from '../../interfaces.js';

/**
 * @name gemsArtRoll
 * @param {number} costOfItem The cost of an individual item
 * @param {number} numRolls The number of rolls to do
 * @param {number} dieMax The max of the die to roll
 * @returns {GemArtData} The gems or art object
**/
function gemsArtRoll(numRolls: number, dieMax: number, costOfItem: number): Gems | Art {

	let total = 0;
	const diceRolls = [];
	for(let i = 0; i < numRolls; i++){
		const num = numberGenerator(1, dieMax);
		diceRolls.push({ value: num, dieSides: dieMax });
		total += num;
	}


	return { goldCostPer: costOfItem, quantity: total, rolls: diceRolls };
}


export default gemsArtRoll;