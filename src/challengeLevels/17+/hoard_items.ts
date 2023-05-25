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

	if(lootRoll <= 5){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d8 times on Magic Item Table C.
		results.items.push(lootRoller(1, 8, "c"));
		return results;
	}

	if(lootRoll <= 11){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d8 times on Magic Item Table C.
		results.items.push(lootRoller(1, 8, "c"));
		return results;
	}

	if(lootRoll <= 14){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d8 times on Magic Item Table C.
		results.items.push(lootRoller(1, 8, "c"));
		return results;
	}

	if(lootRoll <= 22){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d6 times on Magic Item Table D.
		results.items.push(lootRoller(1, 6, "d"));
		return results;
	}

	if(lootRoll <= 38){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d6 times on Magic Item Table D.
		results.items.push(lootRoller(1, 6, "d"));
		return results;
	}

	if(lootRoll <= 46){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d6 times on Magic Item Table D.
		results.items.push(lootRoller(1, 6, "d"));
		return results;
	}

	if(lootRoll <= 52){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d6 times on Magic Item Table E.
		results.items.push(lootRoller(1, 6, "e"));
		return results;
	}

	if(lootRoll <= 63){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d6 times on Magic Item Table E.
		results.items.push(lootRoller(1, 6, "e"));
		return results;
	}

	if(lootRoll <= 68){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d6 times on Magic Item Table E.
		results.items.push(lootRoller(1, 6, "e"));
		return results;
	}

	if(lootRoll <= 69){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table G.
		results.items.push(lootRoller(1, 4, "g"));
		return results;
	}

	if(lootRoll <= 71){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d4 times on Magic Item Table G.
		results.items.push(lootRoller(1, 4, "g"));
		return results;
	}

	if(lootRoll <= 72){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d4 times on Magic Item Table G.
		results.items.push(lootRoller(1, 4, "g"));
		return results;
	}

	if(lootRoll <= 74){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table H.
		results.items.push(lootRoller(1, 4, "h"));
		return results;
	}

	if(lootRoll <= 78){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d4 times on Magic Item Table H.
		results.items.push(lootRoller(1, 4, "h"));
		return results;
	}

	if(lootRoll <= 80){
		// 1d8 5000 gp gems
		results.gems = gemsArtRoll(1, 8, 5000);

		// Roll 1d4 times on Magic Item Table H.
		results.items.push(lootRoller(1, 4, "h"));
		return results;
	}

	if(lootRoll <= 85){
		// 3d6 1000 gp gems
		results.gems = gemsArtRoll(3, 6, 1000);

		// Roll 1d4 times on Magic Item Table I.
		results.items.push(lootRoller(1, 4, "i"));
		return results;
	}

	if(lootRoll <= 95){
		// 1d4 7500 gp art
		results.art = gemsArtRoll(1, 4, 7500);

		// Roll 1d4 times on Magic Item Table I.
		results.items.push(lootRoller(1, 4, "i"));
		return results;
	}

	// lootRoll <= 100
	
	// 1d8 5000 gp gems
	results.gems = gemsArtRoll(1, 8, 5000);

	// Roll 1d4 times on Magic Item Table I.
	results.items.push(lootRoller(1, 4, "i"));
	return results;
}


export default getLoot;