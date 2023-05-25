import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { MoneyObject } from "../../../interfaces.js";


/**
 * @name run
 * @param {number} _lootRoll The loot roll to compare against.
 * @returns {MoneyObject} An object containing the money and the rolls used to obtain it.
 * @description Rolls for money based on the loot roll.
**/
function run(_lootRoll: number): MoneyObject {

	const platinum = 0, electrum = 0;
	const platinumModifier = 1, electrumModifier = 1;

	let gold, silver, copper;
	let goldModifier, silverModifier, copperModifier;

	gold = silver = copper = 0;
	goldModifier = silverModifier = copperModifier = 1;
	const [platinumRolls, goldRolls, electrumRolls, silverRolls, copperRolls] = [[], [], [], [], []];


	// 6x d6 x100 copper
	copperModifier = 100;
	copper = moneyRoller(6, 6, copperModifier, copper, copperRolls);

	// 3x d6 x100 silver
	silverModifier = 100;
	silver = moneyRoller(3, 6, silverModifier, silver, silverRolls);

	// 2x d6 x10 gold
	goldModifier = 10;
	gold = moneyRoller(2, 6, goldModifier, gold, goldRolls);


	return {
		coins: {
			platinum,
			gold,
			electrum,
			silver,
			copper
		},

		rolls: {
			platinum: platinumRolls,
			gold: goldRolls,
			electrum: electrumRolls,
			silver: silverRolls,
			copper: copperRolls
		},

		modifier: {
			platinum: platinumModifier,
			gold: goldModifier,
			electrum: electrumModifier,
			silver: silverModifier,
			copper: copperModifier
		}
	};
}

export default run;