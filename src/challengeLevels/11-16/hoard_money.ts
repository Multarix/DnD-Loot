import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { Money } from "../../../interfaces.js";


/**
 * @name run
 * @param {number} _lootRoll The loot roll to compare against.
 * @returns {MoneyObject} An object containing the money and the rolls used to obtain it.
 * @description Rolls for money based on the loot roll.
**/
function run(_lootRoll: number): Money {

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
		copper: { rolls: copperRolls, modifier: copperModifier, total: copper },
		silver: { rolls: silverRolls, modifier: silverModifier, total: silver },
		gold: { rolls: goldRolls, modifier: goldModifier, total: gold },
		electrum: { rolls: electrumRolls, modifier: electrumModifier, total: electrum },
		platinum: { rolls: platinumRolls, modifier: platinumModifier, total: platinum }
	};
}


export default run;