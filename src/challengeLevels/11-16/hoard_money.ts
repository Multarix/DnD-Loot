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


	// 4x d6 x1000 Gold
	goldModifier = 1000;
	gold = moneyRoller(4, 6, goldModifier, gold, goldRolls);


	// 5x D6 x100 Platinum
	platinumModifier = 100;
	platinum = moneyRoller(5, 6, platinumModifier, platinum, platinumRolls);


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