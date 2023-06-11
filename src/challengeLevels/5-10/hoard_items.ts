import gemsArtRoll from '../../helperFunctions/gemsArtRoll.js';
import lootRoller from '../../helperFunctions/lootRoller.js';
import { ItemLoot } from '../../../interfaces.js';


/**
 * @name getLoot
 * @param {number} lootRoll
 * @returns {ItemLoot}
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

	if(lootRoll <= 10){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);
		return results;
	}

	if(lootRoll <= 16){
		// 3d6 50 gp gems
		results.gems = gemsArtRoll(3, 6, 50);
		return results;
	}

	if(lootRoll <= 22){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);
		return results;
	}

	if(lootRoll <= 28){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);
		return results;
	}

	if(lootRoll <= 32){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d6 times on Magic Item Table A.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "a" });
		return results;
	}

	if(lootRoll <= 36){
		// 3d6 50 gp gems
		results.gems = gemsArtRoll(3, 6, 50);

		// Roll 1d6 times on Magic Item Table A.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "a" });
		return results;
	}

	if(lootRoll <= 40){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);

		// Roll 1d6 times on Magic Item Table A.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "a" });
		return results;
	}

	if(lootRoll <= 44){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d6 times on Magic Item Table A.
		results.lootTableResults = lootRoller({ dieSides: 6, dieRolls: 1, tableName: "a" });
		return results;
	}

	if(lootRoll <= 49){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table B.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "b" });
		return results;
	}

	if(lootRoll <= 54){
		// 3d6 50 gp gems
		results.gems = gemsArtRoll(3, 6, 50);

		// Roll 1d4 times on Magic Item Table B.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "b" });
		return results;
	}

	if(lootRoll <= 59){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);

		// Roll 1d4 times on Magic Item Table B.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "b" });
		return results;
	}

	if(lootRoll <= 63){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d4 times on Magic Item Table B.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "b" });
		return results;
	}

	if(lootRoll <= 66){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 69){
		// 3d6 50 gp gems
		results.gems = gemsArtRoll(3, 6, 50);

		// Roll 1d4 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 72){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);

		// Roll 1d4 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 74){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d4 times on Magic Item Table C.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "c" });
		return results;
	}

	if(lootRoll <= 76){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll once on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 78){
		// 3d6 50 gp gems
		results.gems = gemsArtRoll(3, 6, 50);

		// Roll once on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 79){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);

		// Roll once on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 80){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll once on Magic Item Table D.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "d" });
		return results;
	}

	if(lootRoll <= 84){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table F.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "f" });
		return results;
	}

	if(lootRoll <= 88){
		// 3d6 50 gp gems
		results.gems = gemsArtRoll(3, 6, 50);

		// Roll 1d4 times on Magic Item Table F.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "f" });
		return results;
	}

	if(lootRoll <= 91){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);

		// Roll 1d4 times on Magic Item Table F.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "f" });
		return results;
	}

	if(lootRoll <= 94){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d4 times on Magic Item Table F.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "f" });
		return results;
	}

	if(lootRoll <= 96){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);

		// Roll 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "g" });
		return results;
	}

	if(lootRoll <= 98){
		// 2d4 250 gp art
		results.art = gemsArtRoll(2, 4, 250);

		// Roll 1d4 times on Magic Item Table G.
		results.lootTableResults = lootRoller({ dieSides: 4, dieRolls: 1, tableName: "g" });
		return results;
	}

	if(lootRoll <= 99){
		// 3d6 100 gp gems
		results.gems = gemsArtRoll(3, 6, 100);

		// Roll once on Magic Item Table H.
		results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "h" });
		return results;
	}

	// lootRoll <= 100

	// 2d4 250 gp art
	results.art = gemsArtRoll(2, 4, 250);

	// Roll once on Magic Item Table H.
	results.lootTableResults = lootRoller({ dieSides: 1, dieRolls: 1, tableName: "h" });
	return results;
}


export default getLoot;