import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { MONEY_TOTAL } from "../../../interfaces.js";


/** Rolls for money based on the loot roll.
 * @param lootRoll	The loot roll to compare against.
 * @returns	An object containing the money and the rolls used to obtain it. */
function run(lootRoll: number): MONEY_TOTAL {

	let platinum, gold, electrum, silver, copper;
	let platinumModifier, goldModifier, electrumModifier, silverModifier, copperModifier;

	platinum = gold = electrum = silver = copper = 0;
	platinumModifier = goldModifier = electrumModifier = silverModifier = copperModifier = 1;
	const [platinumRolls, goldRolls, electrumRolls, silverRolls, copperRolls] = [[], [], [], [], []];

	// 56-100
	if(lootRoll >= 56){

		// 2x d6 x100 platinum
		platinumModifier = 100;
		platinum = moneyRoller(2, 6, platinumModifier, platinum, platinumRolls);

		// 1x d6 x1000 gold
		goldModifier = 1000;
		gold = moneyRoller(1, 6, goldModifier, gold, goldRolls);
	}

	// 16-55
	if(lootRoll >= 16 && lootRoll <= 55){

		// 1x d6 x1000 gold
		goldModifier = 1000;
		gold = moneyRoller(1, 6, goldModifier, gold, goldRolls);

		// 1x d6 x100 platinum
		platinumModifier = 100;
		platinum = moneyRoller(1, 6, platinumModifier, platinum, platinumRolls);
	}

	// 1-15
	if(lootRoll >= 1 && lootRoll <= 15){

		// 2x d6 x1000 electrum
		electrumModifier = 1000;
		electrum = moneyRoller(2, 6, electrumModifier, electrum, electrumRolls);

		// 8x d6 gold x100
		goldModifier = 100;
		gold = moneyRoller(8, 6, goldModifier, gold, goldRolls);
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