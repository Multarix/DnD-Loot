import Die from "dnd-dice";
import { GEM_ART } from '../../interfaces.js';

/**
 * @param costOfItem The cost of an individual item
 * @param numRolls The number of rolls to do
 * @param dieMax The max of the die to roll */
function gemsArtRoll(numRolls: number, dieMax: number, costOfItem: number): GEM_ART {

	let total = 0;
	const diceRolls = [];
	for(let i = 0; i < numRolls; i++){
		const die = new Die(dieMax);
		diceRolls.push(die);
		total += die.getValue;
	}


	return { goldCostPer: costOfItem, quantity: total, dice: diceRolls };
}


export default gemsArtRoll;