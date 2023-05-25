import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { MoneyObject } from "../../../interfaces.js";


/**
 * @name run
 * @param {number} _lootRoll The loot roll to compare against.
 * @returns {MoneyObject} An object containing the money and the rolls used to obtain it.
 * @description Rolls for money based on the loot roll.
**/
function run(_lootRoll: number): MoneyObject {

	let platinum, gold, electrum, silver, copper;
	let platinumModifier, goldModifier, electrumModifier, silverModifier, copperModifier;

	platinum = gold = electrum = silver = copper = 0;
	platinumModifier = goldModifier = electrumModifier = silverModifier = copperModifier = 1;
	const [platinumRolls, goldRolls, electrumRolls, silverRolls, copperRolls] = [[], [], [], [], []];


	// 2x d6 x100 Copper
	copperModifier = 100;
	copper = moneyRoller(2, 6, copperModifier, copper, copperRolls);

	// 2x d6 x1000 Silver
	silverModifier = 1000;
	silver = moneyRoller(2, 6, silverModifier, silver, silverRolls);

	// 6x d6 x100 Gold
	goldModifier = 100;
	gold = moneyRoller(6, 6, goldModifier, gold, goldRolls);

	// 3x d6 x10 Platinum
	platinumModifier = 10;
	platinum = moneyRoller(3, 6, platinumModifier, platinum, platinumRolls);


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