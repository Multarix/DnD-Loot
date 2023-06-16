import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { MONEY_TOTAL } from "../../../interfaces.js";


/** Rolls for money based on the loot roll.
 * @param _lootRoll	The loot roll to compare against.
 * @returns	An object containing the money and the rolls used to obtain it. */
function run(_lootRoll: number): MONEY_TOTAL {

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
		copper: { dice: copperRolls, modifier: copperModifier, total: copper },
		silver: { dice: silverRolls, modifier: silverModifier, total: silver },
		gold: { dice: goldRolls, modifier: goldModifier, total: gold },
		electrum: { dice: electrumRolls, modifier: electrumModifier, total: electrum },
		platinum: { dice: platinumRolls, modifier: platinumModifier, total: platinum }
	};
}


export default run;