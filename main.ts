import AllItems from "./src/class/AllItems.js";
import Money from "./src/class/Money.js";

import { D100 } from "dnd-dice";
import { DIFFICULTY } from "./interfaces.js";

type ENCOUNTER_TYPE = "individual" | "hoard";

/** Base class for Individual or Hoard loot */
abstract class BaseLoot {
	protected abstract type: ENCOUNTER_TYPE;
	protected difficulty: DIFFICULTY;
	protected hundred: D100 = new D100();

	/** All of the coins obtained */
	public abstract money: Money;
	public challengeLevel: number = 0;

	constructor(level?: number) {
		this.challengeLevel = level || 0;

		this.difficulty = this.setDifficulty(this.challengeLevel);
	}

	private setDifficulty(level: number): DIFFICULTY {
		let difficulty: DIFFICULTY = "easy";

		if(level >= 17) return difficulty = "deadly";
		if(level >= 11) return difficulty = "hard"; // Between 11 and 16
		if(level >= 5) return difficulty = "medium"; // Between 5 and 10

		return difficulty;
	}


	/** Rerolls the money obtained */
	public abstract rollMoney(): this;
}


/** Loot from a Individual encounter */
export class Individual extends BaseLoot {
	protected type: ENCOUNTER_TYPE;
	declare protected difficulty: DIFFICULTY;
	declare protected hundred: D100;

	public money: Money;
	declare public challengeLevel: number;

	constructor(level?: number) {
		super(level);

		this.type = "individual";
		this.money = new Money(this.hundred.getValue, this.type, this.difficulty);
	}


	public rollMoney(): this {
		this.money.reroll();
		return this;
	}
}


/** Loot from a Hoard encounter */
export class Hoard extends BaseLoot {
	protected type: ENCOUNTER_TYPE;
	declare protected difficulty: DIFFICULTY;
	declare protected hundred: D100;

	public money: Money;
	declare public challengeLevel: number;

	/** All the items obtained */
	public items: AllItems;

	constructor(level?: number) {
		super(level);

		this.type = "hoard";
		this.money = new Money(this.hundred.getValue, this.type, this.difficulty);
		this.items = new AllItems(this.difficulty, this.hundred.getValue);
	}


	public rollMoney(): this {
		this.money.reroll();
		return this;
	}

	/** Rerolls the items obtained */
	public rollItems(): this {
		this.items.reroll();
		return this;
	}
}