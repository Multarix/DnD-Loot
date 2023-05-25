import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { MoneyObject } from "../../../interfaces.js";


/**
 * @name run
 * @param {number} lootRoll The loot roll to compare against.
 * @returns {MoneyObject} An object containing the money and the rolls used to obtain it.
 * @description Rolls for money based on the loot roll.
**/
function run(lootRoll: number): MoneyObject {

	let platinum, gold, electrum, silver, copper;
	let platinumModifier, goldModifier, electrumModifier, silverModifier, copperModifier;

	platinum = gold = electrum = silver = copper = 0;
	platinumModifier = goldModifier = electrumModifier = silverModifier = copperModifier = 1;
	const [platinumRolls, goldRolls, electrumRolls, silverRolls, copperRolls] = [[], [], [], [], []];

	// 96-100
	if(lootRoll >= 96){

		// 2x d6 x10 gold
		goldModifier = 10;
		gold = moneyRoller(2, 6, goldModifier, gold, goldRolls);

		// 3x d6 x10 platinum
		platinumModifier = 10;
		platinum = moneyRoller(3, 6, platinumModifier, platinum, platinumRolls);
	}

	// 71-95
	if(lootRoll >= 71 && lootRoll <= 95){

		// 4x d6 x10 gold
		goldModifier = 10;
		gold = moneyRoller(4, 6, goldModifier, gold, goldRolls);
	}

	// 61-70
	if(lootRoll >= 61 && lootRoll <= 70){

		// 3x d6 x10 electrum
		electrumModifier = 10;
		electrum = moneyRoller(3, 6, electrumModifier, electrum, electrumRolls);

		// 2x d6 x10 gold
		goldModifier = 10;
		gold = moneyRoller(2, 6, goldModifier, gold, goldRolls);
	}

	// 31-60
	if(lootRoll >= 31 && lootRoll <= 60){

		// 6x d6 x10 silver
		silverModifier = 10;
		silver = moneyRoller(6, 6, silverModifier, silver, silverRolls);

		// 2x d6 x10 gold
		goldModifier = 10;
		gold = moneyRoller(2, 6, goldModifier, gold, goldRolls);
	}

	// 1-30
	if(lootRoll >= 1 && lootRoll <= 30){

		// 4x d6 x100 copper
		copperModifier = 100;
		copper = moneyRoller(4, 6, copperModifier, copper, copperRolls);

		// 1x d6 x10 electrum
		electrumModifier = 10;
		electrum = moneyRoller(1, 6, electrumModifier, electrum, electrumRolls);
	}

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