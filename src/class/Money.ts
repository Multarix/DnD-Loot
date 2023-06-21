// Individual Money
import individualMoney04 from "../challengeLevels/0-4/individual_money.js";
import individualMoney510 from "../challengeLevels/5-10/individual_money.js";
import individualMoney1116 from "../challengeLevels/11-16/individual_money.js";
import individualMoney17 from "../challengeLevels/17+/individual_money.js";

// Hoard Money
import hoardMoney04 from "../challengeLevels/0-4/hoard_money.js";
import hoardMoney510 from "../challengeLevels/5-10/hoard_money.js";
import hoardMoney1116 from "../challengeLevels/11-16/hoard_money.js";
import hoardMoney17 from "../challengeLevels/17+/hoard_money.js";

// Interfaces & TypeDefs
import { Die, COIN_INFO } from "../../interfaces.js";
import { DIFFICULTY } from "../../interfaces.js";

interface DIFFICULTY_LEVELS {
	easy: Function
	medium: Function
	hard: Function
	deadly: Function
}

interface MONEY_FUNCTIONS {
	individual: DIFFICULTY_LEVELS
	hoard: DIFFICULTY_LEVELS
}

type LOOT_TYPE = "hoard" | "individual";

const moneyFunctions: MONEY_FUNCTIONS = {
	individual: {
		easy: individualMoney04,
		medium: individualMoney510,
		hard: individualMoney1116,
		deadly: individualMoney17
	},
	hoard: {
		easy: hoardMoney04,
		medium: hoardMoney510,
		hard: hoardMoney1116,
		deadly: hoardMoney17
	}
};

Object.freeze(moneyFunctions);

type Tuple = [number, number];

class CoinData {
	public dice: Die[] = [];
	public modifier: number = 0;
	public total: number = 0;

	constructor(coinData: COIN_INFO) {
		this.dice = coinData.dice;
		this.modifier = coinData.modifier;
		this.total = coinData.total;
	}
}

/** All of the coins obtained */
export default class Money {

	#lootRoll: number;
	#lootType: LOOT_TYPE;
	#difficultyRating: DIFFICULTY;

	#copper: CoinData;
	#silver: CoinData;
	#electrum: CoinData;
	#gold: CoinData;
	#platinum: CoinData;

	/**
	 * @param roll				The value rolled on the table
	 * @param type				The type loot rolls being done (individual or hoard)
	 * @param challengeRating	The challenge rating of the encounter */
	constructor(roll: number, type: LOOT_TYPE, difficultyRating: DIFFICULTY) {
		this.#lootRoll = roll;
		this.#lootType = type;
		this.#difficultyRating = difficultyRating;

		const func = moneyFunctions[this.#lootType][this.#difficultyRating];
		const rolledCoins = func(this.#lootRoll);

		this.#copper = new CoinData(rolledCoins.copper);
		this.#silver = new CoinData(rolledCoins.silver);
		this.#electrum = new CoinData(rolledCoins.electrum);
		this.#gold = new CoinData(rolledCoins.gold);
		this.#platinum = new CoinData(rolledCoins.platinum);
	}

	/** Converts copper coins to silver coins */
	#copperToSilver(copper: number): Tuple {
		const quotient = Math.floor(copper / 10);
		const remainder = copper % 10;
		return [quotient, remainder];
	}

	/** Converts silver coins to electrum coins */
	#silverToElectrum(silver: number): Tuple {
		const quotient = Math.floor(silver / 5);
		const remainder = silver % 5;
		return [quotient, remainder];
	}

	/** Converts electrum coins to gold coins */
	#electrumToGold(electrum: number): Tuple {
		const quotient = Math.floor(electrum / 2);
		const remainder = electrum % 2;
		return [quotient, remainder];
	}

	/** Converts gold coins to platinum coins */
	#goldToPlatinum(gold: number): Tuple {
		const quotient = Math.floor(gold / 10);
		const remainder = gold % 10;
		return [quotient, remainder];
	}

	/** The copper coins obtained */
	public get copper(): CoinData {
		return this.#copper;
	}

	/** The silver coins obtained */
	public get silver(): CoinData {
		return this.#silver;
	}

	/** The electrum coins obtained */
	public get electrum(): CoinData {
		return this.#electrum;
	}

	/** The gold coins obtained */
	public get gold(): CoinData {
		return this.#gold;
	}

	/** The platinum coins obtained */
	public get platinum(): CoinData {
		return this.#platinum;
	}

	/** Rerolls the coins obtained */
	public reroll(): this {
		const func = moneyFunctions[this.#lootType][this.#difficultyRating];
		const rolledCoins = func(this.#lootRoll);

		this.#copper = new CoinData(rolledCoins.copper);
		this.#silver = new CoinData(rolledCoins.silver);
		this.#electrum = new CoinData(rolledCoins.electrum);
		this.#gold = new CoinData(rolledCoins.gold);
		this.#platinum = new CoinData(rolledCoins.platinum);

		return this;
	}

	/** Returns the total value of all coins using copper as the highest denomination
	 * ```js
	 * console.log(Money.inCopper()) // "10458 CP"
	 * ``` */
	public inCopper(): string {
		const copper = this.#copper.total;
		const silver = this.#silver.total * 10;
		const electrum = this.#electrum.total * 50;
		const gold = this.#gold.total * 100;
		const platinum = this.#platinum.total * 1000;

		const total = copper + silver + electrum + gold + platinum;
		return `${total} CP`;
	}

	/** Returns the total value of all coins using silver as the highest denomination
	 * ```js
	 * console.log(Money.inSilver()) // "1045 SP, 8 CP"
	 * ``` */
	public inSilver(): string {
		const denominations: String[] = [];

		const cp = this.#copperToSilver(this.#copper.total);
		const copper = cp[1];

		let silver = this.#silver.total + cp[0];
		silver += this.#electrum.total * 5;
		silver += this.#gold.total * 10;
		silver += this.#platinum.total * 100;

		denominations.push(`${silver} SP`);
		if(copper > 0) denominations.push(`${copper} CP`);

		return denominations.join(", ");
	}

	/** Returns the total value of all coins using electrum as the highest denomination
	 * ```js
	 * console.log(Money.inElectrum()) // "209 EP, 3 SP, 8 CP"
	 * ``` */
	public inElectrum(): string {
		const denominations: String[] = [];

		const cp = this.#copperToSilver(this.#copper.total);
		const copper = cp[1];

		const sp = this.#silverToElectrum(this.#silver.total + cp[0]);
		const silver = sp[1];

		let electrum = this.#electrum.total + sp[0];
		electrum += this.#gold.total * 2;
		electrum += this.#platinum.total * 20;

		denominations.push(`${electrum} EP`);
		if(silver > 0) denominations.push(`${silver} SP`);
		if(copper > 0) denominations.push(`${copper} CP`);

		return denominations.join(", ");
	}

	/** Returns the total value of all coins using gold as the highest denomination
	 * ```js
	 * console.log(Money.inGold()) // "104 GP, 1 EP, 3 SP, 8 CP"
	 * ``` */
	public inGold(): string {
		const denominations: String[] = [];

		const cp = this.#copperToSilver(this.#copper.total);
		const copper = cp[1];

		const sp = this.#silverToElectrum(this.#silver.total + cp[0]);
		const silver = sp[1];

		const ep = this.#electrumToGold(this.#electrum.total + sp[0]);
		const electrum = ep[1];

		let gold = this.#gold.total + ep[0];
		gold += this.#platinum.total * 10;

		denominations.push(`${gold} GP`);
		if(electrum > 0) denominations.push(`${electrum} EP`);
		if(silver > 0) denominations.push(`${silver} SP`);
		if(copper > 0) denominations.push(`${copper} CP`);

		return denominations.join(", ");
	}

	/** Returns the total value of all coins using platinum as the highest denomination
	 * ```js
	 * console.log(Money.inPlatinum()) // "10 PP, 4 GP, 1 EP, 3 SP, 8 CP"
	 * ``` */
	public inPlatinum(): string {
		const denominations: String[] = [];

		const cp = this.#copperToSilver(this.#copper.total);
		const copper = cp[1];

		const sp = this.#silverToElectrum(this.#silver.total + cp[0]);
		const silver = sp[1];

		const ep = this.#electrumToGold(this.#electrum.total + sp[0]);
		const electrum = ep[1];

		const gp = this.#goldToPlatinum(this.#gold.total + ep[0]);
		const gold = gp[1];

		const platinum = this.#platinum.total + gp[0];

		if(platinum > 0) denominations.push(`${platinum} PP`);
		if(gold > 0) denominations.push(`${gold} GP`);
		if(electrum > 0) denominations.push(`${electrum} EP`);
		if(silver > 0) denominations.push(`${silver} SP`);
		if(copper > 0) denominations.push(`${copper} CP`);

		return denominations.join(", ");
	}
}