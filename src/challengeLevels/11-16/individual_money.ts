import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { Money } from "../../../interfaces.js";


/**
 * @name run
 * @param {number} lootRoll The loot roll to compare against.
 * @returns {MoneyObject} An object containing the money and the rolls used to obtain it.
 * @description Rolls for money based on the loot roll.
**/
function run(lootRoll: number): Money {

	let platinum, gold, electrum, silver, copper;
	let platinumModifier, goldModifier, electrumModifier, silverModifier, copperModifier;

	platinum = gold = electrum = silver = copper = 0;
	platinumModifier = goldModifier = electrumModifier = silverModifier = copperModifier = 1;
	const [platinumRolls, goldRolls, electrumRolls, silverRolls, copperRolls] = [[], [], [], [], []];

	// 76-100
	if(lootRoll >= 76){

		// 2x d6 x100 gold
		goldModifier = 100;
		gold = moneyRoller(2, 6, goldModifier, gold, goldRolls);

		// 2x d6 x10 platinum
		platinumModifier = 10;
		platinum = moneyRoller(2, 6, platinumModifier, platinum, platinumRolls);
	}

	// 36-75
	if(lootRoll >= 36 && lootRoll <= 75){

		// 2x d6 gold x100
		goldModifier = 100;
		gold = moneyRoller(2, 6, goldModifier, gold, goldRolls);

		// 1x d6 x10 platinum
		platinumModifier = 10;
		platinum = moneyRoller(1, 6, platinumModifier, platinum, platinumRolls);
	}

	// 21-35
	if(lootRoll >= 21 && lootRoll <= 35){

		// 1x d6 x100 electrum
		electrumModifier = 100;
		electrum = moneyRoller(1, 6, electrumModifier, electrum, electrumRolls);

		// 1x d6 x100 silver
		silverModifier = 100;
		silver = moneyRoller(1, 6, silverModifier, silver, silverRolls);
	}

	// 1-20
	if(lootRoll >= 1 && lootRoll <= 20){

		// 4x d6 x100 silver
		silverModifier = 100;
		silver = moneyRoller(4, 6, silverModifier, silver, silverRolls);

		// 1x d6 x100 copper
		copperModifier = 100;
		copper = moneyRoller(1, 6, copperModifier, copper, copperRolls);
	}


	return {
		copper: { dice: copperRolls, modifier: copperModifier, total: copper },
		silver: { dice: silverRolls, modifier: silverModifier, total: silver },
		gold: { dice: goldRolls, modifier: goldModifier, total: gold },
		electrum: { dice: electrumRolls, modifier: electrumModifier, total: electrum },
		platinum: { dice: platinumRolls, modifier: platinumModifier, total: platinum }
	};
}


export default run;