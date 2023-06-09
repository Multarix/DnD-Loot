import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { MONEY_TOTAL } from "../../../interfaces.js";


/** Rolls for money based on the loot roll.
 * @param lootRoll	The loot roll to compare against.
 * @returns	An object containing the money and the rolls used to obtain it. */
function run(lootRoll: number): MONEY_TOTAL {

	let platinum, gold, electrum, silver, copper;
	const platinumModifier = 1, goldModifier = 1, electrumModifier = 1, silverModifier = 1, copperModifier = 1;

	platinum = gold = electrum = silver = copper = 0;
	const [platinumRolls, goldRolls, electrumRolls, silverRolls, copperRolls] = [[], [], [], [], []];


	// 96-100
	if(lootRoll >= 96){

		// 1x d6 x1 platinum
		platinum = moneyRoller(1, 6, platinumModifier, platinum, platinumRolls);
	}

	// 71-95
	if(lootRoll >= 71 && lootRoll <= 95){

		// 3x d6 x1 gold
		gold = moneyRoller(3, 6, goldModifier, gold, goldRolls);
	}

	// 61-70
	if(lootRoll >= 61 && lootRoll <= 70){

		// 3x d6 x1 electrum
		electrum = moneyRoller(3, 6, electrumModifier, electrum, electrumRolls);
	}

	// 31-60
	if(lootRoll >= 31 && lootRoll <= 60){

		// 4x d6 x1 silver
		silver = moneyRoller(4, 6, silverModifier, silver, silverRolls);
	}

	// 1-30
	if(lootRoll >= 1 && lootRoll <= 30){

		// 5x d6 x1 copper
		copper = moneyRoller(5, 6, copperModifier, copper, copperRolls);
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