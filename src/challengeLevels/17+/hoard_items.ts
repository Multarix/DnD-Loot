import gemsArtRoll from '../../helperFunctions/gemsArtRoll.js';
import lootRoller from '../../helperFunctions/magicItemRoller.js';
import { ITEM_LOOT } from '../../../interfaces.js';


function getLoot(lootRoll: number): ITEM_LOOT {

	const results: ITEM_LOOT = {
		gems: {
			goldCostPer: 0,
			quantity: 0,
			dice: []
		},

		art: {
			goldCostPer: 0,
			quantity: 0,
			dice: []
		},

		lootTableResults: []
	};

	if(lootRoll <= 3){
		// Nothing
		return results;
	}

	if(lootRoll <= 5){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d8 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 8, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 11){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d8 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 8, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 14){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d8 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 8, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 22){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d6 times on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 38){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d6 times on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 46){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d6 times on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 52){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d6 times on Magic Item Table E.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "e" });
		return results;
	}

	if(lootRoll <= 63){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d6 times on Magic Item Table E.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "e" });
		return results;
	}

	if(lootRoll <= 68){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d6 times on Magic Item Table E.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "e" });
		return results;
	}

	if(lootRoll <= 69){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "g" });
		return results;
	}

	if(lootRoll <= 71){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "g" });
		return results;
	}

	if(lootRoll <= 72){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "g" });
		return results;
	}

	if(lootRoll <= 74){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "h" });
		return results;
	}

	if(lootRoll <= 78){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d4 times on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "h" });
		return results;
	}

	if(lootRoll <= 80){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d4 times on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "h" });
		return results;
	}

	if(lootRoll <= 85){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table I.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "i" });
		return results;
	}

	if(lootRoll <= 95){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d4 times on Magic Item Table I.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "i" });
		return results;
	}

	// lootRoll <= 100

	// 1d8 5000 gp gems
	results.gems = gemsArtRoll(1, 8, 5000);

	// Roll 1d4 times on Magic Item Table I.
	results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "i" });
	return results;
}


export default getLoot;