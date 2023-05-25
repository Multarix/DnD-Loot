import numberGenerator from './src/helperFunctions/numberGenerator.js';
import { LootClassRolls, MoneyObject, AllLoot } from "./interfaces.js"


class Loot {

	#challengeLevel: number;
	#lootClassRolls: LootClassRolls;
	money: MoneyObject;
	items: AllLoot;
	_folder: string = "0-4"; // Protected, but sadly not enforcable :(

	constructor(level: number | undefined){
		this.#challengeLevel = level || 0;

		const d10 = numberGenerator(1, 10);
		const percentile = numberGenerator(0, 9) * 10;
		const total = d10 + percentile;

		
		this.#lootClassRolls = {
			percentile,
			d10,
			total
		};


		this.money = {
			coins: { platinum: 0, gold: 0, electrum: 0, silver: 0, copper: 0 },
			rolls: { platinum: [], gold: [], electrum: [], silver: [], copper: [] },
			modifier: { platinum: 0, gold: 0, electrum: 0, silver: 0, copper: 0 }
		};

		
		this.items = {
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
		
		
		const chLevel = this.challengeLevel;
		if(4 >= chLevel) this._folder = "0-4"; // Less than 4
		if(5 <= chLevel && 10 >= chLevel) this._folder = "5-10"; // Between 5 and 10
		if(11 <= chLevel && 16 >= chLevel) this._folder = "11-16"; // Between 11 and 16
		if(17 <= chLevel) this._folder = "17+"; // Greater than 17
	}

	
	get lootClassRolls(): LootClassRolls {
		return this.#lootClassRolls;
	}

	
	get challengeLevel(): number {
		return this.#challengeLevel;
	}
}


class IndividualLoot extends Loot {

	#type;

	constructor(level: number){
		super(level);
		this.#type = "individual";
	}

	
	async getMoney(): Promise<MoneyObject>{
		const moneyRoll = await import(`./src/challengeLevels/${this._folder}/${this.#type}_money.js`);
		this.money = moneyRoll.default(this.lootClassRolls.total);
		return this.money;
	}
}


class HoardLoot extends IndividualLoot {

	#type;

	constructor(level: number){
		super(level);
		this.#type = "hoard";
	}

	
	async getItems(): Promise<AllLoot>{
		const getLoot = await import(`./src/challengeLevels/${this._folder}/${this.#type}_items.js`);
		this.items = getLoot.default(this.lootClassRolls.total);
		return this.items;
	}
}


export { HoardLoot, IndividualLoot };