import hoardItems4 from "./src/challengeLevels/0-4/hoard_items.js";
import hoardMoney4 from "./src/challengeLevels/0-4/hoard_money.js";
import indivMoney4 from "./src/challengeLevels/0-4/individual_money.js";

import hoardItems10 from "./src/challengeLevels/5-10/hoard_items.js";
import hoardMoney10 from "./src/challengeLevels/5-10/hoard_money.js";
import indivMoney10 from "./src/challengeLevels/5-10/individual_money.js";

import hoardItems16 from "./src/challengeLevels/11-16/hoard_items.js";
import hoardMoney16 from "./src/challengeLevels/11-16/hoard_money.js";
import indivMoney16 from "./src/challengeLevels/11-16/individual_money.js";

import hoardItems17 from "./src/challengeLevels/17+/hoard_items.js";
import hoardMoney17 from "./src/challengeLevels/17+/hoard_money.js";
import indivMoney17 from "./src/challengeLevels/17+/individual_money.js";

import Die from './src/classes/die.js';
import { LootRolls, ItemLoot, Money } from "./interfaces.js";


interface ChallengeLevelMoneyFiles {
	hoardMoney: Function
	individualMoney: Function
}

interface ChallengeLevelLootFiles {
	hoardItems: Function
}

interface ChallengeLevelFiles extends ChallengeLevelMoneyFiles, ChallengeLevelLootFiles { }

interface ChallengeFolder {
	"0-4": ChallengeLevelFiles
	"5-10": ChallengeLevelFiles
	"11-16": ChallengeLevelFiles
	"17+": ChallengeLevelFiles
}


const challengeLevelFiles: ChallengeFolder = {
	"0-4": {
		hoardItems: hoardItems4,
		hoardMoney: hoardMoney4,
		individualMoney: indivMoney4
	},
	"5-10": {
		hoardItems: hoardItems10,
		hoardMoney: hoardMoney10,
		individualMoney: indivMoney10
	},
	"11-16": {
		hoardItems: hoardItems16,
		hoardMoney: hoardMoney16,
		individualMoney: indivMoney16
	},
	"17+": {
		hoardItems: hoardItems17,
		hoardMoney: hoardMoney17,
		individualMoney: indivMoney17
	}
};


abstract class BaseLoot {

	#challengeLevel: number;
	#lootClass: LootRolls;

	money: Money = {
		copper: { total: 0, dice: [], modifier: 0 },
		silver: { total: 0, dice: [], modifier: 0 },
		electrum: { total: 0, dice: [], modifier: 0 },
		gold: { total: 0, dice: [], modifier: 0 },
		platinum: { total: 0, dice: [], modifier: 0 }
	};

	items: ItemLoot = {
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

	#type: string = "";
	protected _folder: string = "0-4";

	constructor(level: number | undefined) {
		this.#challengeLevel = level || 0;

		const d10 = new Die(10);
		const percentile = new Die(9);
		const total = d10.value + (percentile.value * 10);


		this.#lootClass = {
			percentile,
			d10,
			total
		};


		const chLevel = this.challengeLevel;
		if(chLevel <= 4) this._folder = "0-4"; // Less than 4
		if(chLevel >= 5 && chLevel <= 10) this._folder = "5-10"; // Between 5 and 10
		if(chLevel >= 11 && chLevel <= 16) this._folder = "11-16"; // Between 11 and 16
		if(chLevel >= 17) this._folder = "17+"; // Greater than 17
	}


	protected set _setType(type: string) {
		this.#type = type;
	}

	protected get _getType(): string {
		return this.#type;
	}

	/**
	 * Returns the challenge level of the loot
	 */
	get challengeLevel(): number {
		return this.#challengeLevel;
	}
	
	/**
	 * Returns the loot rolls
	 */
	get lootRolls(): LootRolls {
		return this.#lootClass;
	}

	/**
	 * Rerolls the items obtained
	 */
	rollItems(): this {
		return this;
	}
	
	/**
	 * Rerolls the money obtained
	 */
	rollMoney(): this {
		return this;
	}
}



export class IndividualLoot extends BaseLoot {

	constructor(level: number) {
		super(level);
		this._setType = "individual";
		this.rollMoney();
	}

	
	rollMoney(): this {
		const folder = this._folder;
		const file = `${this._getType}Money`;

		const moneyRoll = challengeLevelFiles[folder as keyof ChallengeFolder][file as keyof ChallengeLevelMoneyFiles];
		this.money = moneyRoll(this.lootRolls.total);
		return this;
	}
}



export class HoardLoot extends IndividualLoot {

	constructor(level: number) {
		super(level);
		this._setType = "hoard";
		this.rollItems();
	}

	
	rollItems(): this {
		const folder = this._folder;
		const file = `${this._getType}Items`;

		const getLoot = challengeLevelFiles[folder as keyof ChallengeFolder][file as keyof ChallengeLevelLootFiles];

		this.items = getLoot(this.lootRolls.total);
		return this;
	}
}