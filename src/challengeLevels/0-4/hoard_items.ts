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

	if(lootRoll <= 16){
		// 2d6 10 gp gems
		results.gems = gemsArtRoll(2, 6, 10);
		return results;
	}

	if(lootRoll <= 26){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);
		return results;
	}

	if(lootRoll <= 36){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);
		return results;
	}

	if(lootRoll <= 44){
		// 2d6 10 gp gems
		results.gems = gemsArtRoll(2, 6, 10);

		// Roll 1d6 times on Magic Item Table A.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "a" });
		return results;
	}

	if(lootRoll <= 52){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d6 times on Magic Item Table A.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "a" });
		return results;
	}

	if(lootRoll <= 60){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d6 times on Magic Item Table A.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "a" });
		return results;
	}

	if(lootRoll <= 65){
		// 2d6 10 gp gems
		results.gems = gemsArtRoll(2, 6, 10);

		// Roll 1d4 times on Magic Item Table B.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "b" });
		return results;
	}

	if(lootRoll <= 70){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table B.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "b" });
		return results;
	}

	if(lootRoll <= 75){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d4 times on Magic Item Table B.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "b" });
		return results;
	}

	if(lootRoll <= 78){
		// 2d6 10 gp gems
		results.gems = gemsArtRoll(2, 6, 10);

		// Roll 1d4 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 80){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 85){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d4 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 92){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table F.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "f" });
		return results;
	}

	if(lootRoll <= 97){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d4 times on Magic Item Table F.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "f" });
		return results;
	}

	if(lootRoll <= 99){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll once on Magic Item Table G.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "g" });
		return results;
	}

	// lootRoll <= 100

	// 2d6 50 gp gems
	results.gems = gemsArtRoll(2, 6, 50);

	// Roll once on Magic Item Table G.
	results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "g" });
	return results;
}


export default getLoot;