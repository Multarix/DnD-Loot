import moneyRoller from "../../helperFunctions/moneyRoller.js";
import { MONEY_TOTAL } from "../../../interfaces.js";


/** Rolls for money based on the loot roll.
 * @param _lootRoll	The loot roll to compare against.
 * @returns	An object containing the money and the rolls used to obtain it. */
function run(_lootRoll: number): MONEY_TOTAL {

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
		copper: { dice: copperRolls, modifier: copperModifier, total: copper },
		silver: { dice: silverRolls, modifier: silverModifier, total: silver },
		gold: { dice: goldRolls, modifier: goldModifier, total: gold },
		electrum: { dice: electrumRolls, modifier: electrumModifier, total: electrum },
		platinum: { dice: platinumRolls, modifier: platinumModifier, total: platinum }
	};
}


export default run;
