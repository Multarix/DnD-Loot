import AllItems from "./src/class/AllItems.js";
import Money from "./src/class/Money.js";

import { D100 } from "dnd-dice";
import { DIFFICULTY } from "./interfaces.js";

type ENCOUNTER_TYPE = "individual" | "hoard";


/** Loot from a Individual encounter */
export class IndividualLoot {

	#challengeLevel: number;

	protected _difficulty: DIFFICULTY;
	protected _hundred: D100 = new D100();

	protected _money: Money;
	protected _type: ENCOUNTER_TYPE;

	constructor(level?: number) {
		this._type = "individual";

		this.#challengeLevel = level || 0;
		this._difficulty = this.setDifficulty(this.challengeLevel);

		this._money = new Money(this._hundred.value, this._type, this._difficulty);
	}

	private setDifficulty(level: number): DIFFICULTY {
		let difficulty: DIFFICULTY = "easy";

		if(level >= 17) return difficulty = "deadly";
		if(level >= 11) return difficulty = "hard"; // Between 11 and 16
		if(level >= 5) return difficulty = "medium"; // Between 5 and 10

		return difficulty;
	}

	/** The difficulty of the encounter */
	public get challengeLevel(): number {
		return this.#challengeLevel;
	}

	/** All of the coins obtained from the encounter */
	public get money(): Money {
		return this._money;
	}
}


/** Loot from a Hoard encounter */
export class HoardLoot extends IndividualLoot {
	/** All the items obtained */
	protected _items: AllItems;

	constructor(level?: number) {
		super(level);

		this._type = "hoard";
		this._money = new Money(this._hundred.value, this._type, this._difficulty);
		this._items = new AllItems(this._difficulty, this._hundred.value);
	}

	public get items(): AllItems {
		return this._items;
	}
}