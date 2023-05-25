import numberGenerator from './numberGenerator.js';


/**
 * @name gemsArtRoll
 * @param {number} costOfItem The cost of an individual item
 * @param {number} numRolls The number of rolls to do
 * @param {number} dieMax The max of the die to roll
 * @returns {gemArtData} The gems or art object
**/
function gemsArtRoll(numRolls: number, dieMax: number, costOfItem: number){

	let total = 0;
	const diceRolls = [];
	for(let i = 0; i < numRolls; i++){
		const num = numberGenerator(1, dieMax);
		diceRolls.push({ roll: num, die: `d${dieMax}` });
		total += num;
	}


	return { gpCostPer: costOfItem, amount: total, rolls: diceRolls };
}


export default gemsArtRoll;