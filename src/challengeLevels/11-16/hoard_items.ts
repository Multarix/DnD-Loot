import gemsArtRoll from '../../helperFunctions/gemsArtRoll.js';
import lootRoller from '../../helperFunctions/lootRoller.js';
import { ItemLoot } from '../../../interfaces.js';


/**
 * @name getLoot
 * @param {number} lootRoll
 * @returns {ItemLoot};
 */
function getLoot(lootRoll: number): ItemLoot {

	const results: ItemLoot = {
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

	if(lootRoll <= 6){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);
		return results;
	}

	if(lootRoll <= 9){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);
		return results;
	}

	if(lootRoll <= 12){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);
		return results;
	}

	if(lootRoll <= 15){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);
		return results;
	}

	if(lootRoll <= 19){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.
		results.lootTableResults = lootRoller([{ dieSides: 4, dieRolls: 1, tableName: "a" }, { dieSides: 6, dieRolls: 1, tableName: "b" }]);
		return results;
	}

	if(lootRoll <= 23){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);

		// Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.
		results.lootTableResults = lootRoller([{ dieSides: 4, dieRolls: 1, tableName: "a" }, { dieSides: 6, dieRolls: 1, tableName: "b" }]);
		return results;
	}

	if(lootRoll <= 26){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);

		// Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.
		results.lootTableResults = lootRoller([{ dieSides: 4, dieRolls: 1, tableName: "a" }, { dieSides: 6, dieRolls: 1, tableName: "b" }]);
		return results;
	}

	if(lootRoll <= 29){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.
		results.lootTableResults = lootRoller([{ dieSides: 4, dieRolls: 1, tableName: "a" }, { dieSides: 6, dieRolls: 1, tableName: "b" }]);
		return results;
	}

	if(lootRoll <= 35){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d6 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 40){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);

		// Roll 1d6 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 45){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);

		// Roll 1d6 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 50){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d6 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 54){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d4 times on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 58){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);

		// Roll 1d4 times on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 62){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);

		// Roll 1d4 times on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 66){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 68){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll once on Magic Item Table E.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "e" });
		return results;
	}

	if(lootRoll <= 70){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);

		// Roll once on Magic Item Table E.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "e" });
		return results;
	}

	if(lootRoll <= 72){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);

		// Roll once on Magic Item Table E.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "e" });
		return results;
	}

	if(lootRoll <= 74){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll once on Magic Item Table E.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "e" });
		return results;
	}

	if(lootRoll <= 76){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller([{ dieSides: 1, dieRolls: 1, tableName: "f" }, { dieSides: 4, dieRolls: 1, tableName: "g" }]);
		return results;
	}

	if(lootRoll <= 78){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);

		// Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller([{ dieSides: 1, dieRolls: 1, tableName: "f" }, { dieSides: 4, dieRolls: 1, tableName: "g" }]);
		return results;
	}

	if(lootRoll <= 80){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);

		// Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller([{ dieSides: 1, dieRolls: 1, tableName: "f" }, { dieSides: 4, dieRolls: 1, tableName: "g" }]);
		return results;
	}

	if(lootRoll <= 82){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller([{ dieSides: 1, dieRolls: 1, tableName: "f" }, { dieSides: 4, dieRolls: 1, tableName: "g" }]);
		return results;
	}

	if(lootRoll <= 85){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d4 times on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "h" });
		return results;
	}

	if(lootRoll <= 88){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);

		// Roll 1d4 times on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "h" });
		return results;
	}

	if(lootRoll <= 90){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);

		// Roll 1d4 times on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "h" });
		return results;
	}

	if(lootRoll <= 92){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "h" });
		return results;
	}

	if(lootRoll <= 94){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll once on Magic Item Table I.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "i" });
		return results;
	}

	if(lootRoll <= 96){
		// 2d4 750 gp art
		results.art = gemsArtRoll(2, 4, 750);

		// Roll once on Magic Item Table I.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "i" });
		return results;
	}

	if(lootRoll <= 98){
		// 3d6 500 gp gems
		results.gems = gemsArtRoll(3, 6, 500);

		// Roll once on Magic Item Table I.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "i" });
		return results;
	}

	// lootRoll <= 100)

	// 3d6 1000 gp gems
	results.gems = gemsArtRoll(3, 6, 1000);

	// Roll once on Magic Item Table I.
	results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "i" });
	return results;
}


export default getLoot;