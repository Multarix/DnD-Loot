import gemsArtRoll from '../../helperFunctions/gemsArtRoll.js';
import lootRoller from '../../helperFunctions/lootRoller.js';
import { AllLoot, GemsArtResults } from '../../../interfaces.js';


/**
 * @name getLoot
 * @param {number} lootRoll
 * @returns {allLoot};
**/
function getLoot(lootRoll: number): AllLoot {

	const results: GemsArtResults = {
		gems: {
			gpCostPer: 0,
			amount: 0,
			rolls: []
		},
		
		art: {
			gpCostPer: 0,
			amount: 0,
			rolls: []
		},
		
		items: []
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
		results.items.push(lootRoller(1, 6, "a"));
		return results;
	}

	if(lootRoll <= 52){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d6 times on Magic Item Table A.
		results.items.push(lootRoller(1, 6, "a"));
		return results;
	}

	if(lootRoll <= 60){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d6 times on Magic Item Table A.
		results.items.push(lootRoller(1, 6, "a"));
		return results;
	}

	if(lootRoll <= 65){
		// 2d6 10 gp gems
		results.gems = gemsArtRoll(2, 6, 10);

		// Roll 1d4 times on Magic Item Table B.
		results.items.push(lootRoller(1, 4, "b"));
		return results;
	}

	if(lootRoll <= 70){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table B.
		results.items.push(lootRoller(1, 4, "b"));
		return results;
	}

	if(lootRoll <= 75){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d4 times on Magic Item Table B.
		results.items.push(lootRoller(1, 4, "b"));
		return results;
	}

	if(lootRoll <= 78){
		// 2d6 10 gp gems
		results.gems = gemsArtRoll(2, 6, 10);

		// Roll 1d4 times on Magic Item Table C.
		results.items.push(lootRoller(1, 4, "c"));
		return results;
	}

	if(lootRoll <= 80){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table C.
		results.items.push(lootRoller(1, 4, "c"));
		return results;
	}

	if(lootRoll <= 85){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d4 times on Magic Item Table C.
		results.items.push(lootRoller(1, 4, "c"));
		return results;
	}

	if(lootRoll <= 92){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll 1d4 times on Magic Item Table F.
		results.items.push(lootRoller(1, 4, "f"));
		return results;
	}

	if(lootRoll <= 97){
		// 2d6 50 gp gems
		results.gems = gemsArtRoll(2, 6, 50);

		// Roll 1d4 times on Magic Item Table F.
		results.items.push(lootRoller(1, 4, "f"));
		return results;
	}

	if(lootRoll <= 99){
		// 2d4 25 gp art
		results.art = gemsArtRoll(2, 4, 25);

		// Roll once on Magic Item Table G.
		results.items.push(lootRoller(1, 1, "g"));
		return results;
	}

	// lootRoll <= 100

	// 2d6 50 gp gems
	results.gems = gemsArtRoll(2, 6, 50);

	// Roll once on Magic Item Table G.
	results.items.push(lootRoller(1, 1, "g"));
	return results;
}


export default getLoot;