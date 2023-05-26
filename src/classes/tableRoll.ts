import Die from './die.js';
import tableA from '../magicItemTables/MagicItemTableA.js';
import tableB from '../magicItemTables/MagicItemTableB.js';
import tableC from '../magicItemTables/MagicItemTableC.js';
import tableD from '../magicItemTables/MagicItemTableD.js';
import tableE from '../magicItemTables/MagicItemTableE.js';
import tableF from '../magicItemTables/MagicItemTableF.js';
import tableG from '../magicItemTables/MagicItemTableG.js';
import tableH from '../magicItemTables/MagicItemTableH.js';
import tableI from '../magicItemTables/MagicItemTableI.js';



export type TableName = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";


export interface LootTables {
	a: Function
	b: Function
	c: Function
	d: Function
	e: Function
	f: Function
	g: Function
	h: Function
	i: Function
}

export interface Item {
	name: string
	link: string
	roll: number
}

export interface TableRollInfo {
	dieSides: number
	dieRolls: number
	tableName: TableName
}

export interface TableRollSetter {
	dieSides?: number
	dieRolls?: number
	tableName?: TableName
}


interface DiceInfo {
	dieSides: number
	dieRolls: number
	value: number
}


const tables: LootTables = {
	'a': tableA,
	'b': tableB,
	'c': tableC,
	'd': tableD,
	'e': tableE,
	'f': tableF,
	'g': tableG,
	'h': tableH,
	'i': tableI
};



/**
 * @description
 * Represents a set of rolls on a Magic Item Table.
**/
export default class TableRoll {

	#tableName: string = "a";
	#diceInfo: DiceInfo = { dieSides: 1, dieRolls: 1, value: 0 };
	#items: Item[] = [];

	constructor(diceInfo: TableRollInfo) {
		if(!diceInfo.tableName || !diceInfo.dieSides || !diceInfo.dieRolls) throw new Error("Constructor requires a object with the properties: tableName, dieSides, dieRolls");
		if(typeof diceInfo.tableName !== "string") throw new Error("tableName must be a string");
		if(typeof diceInfo.dieSides !== "number") throw new Error("dieSides must be a number");
		if(typeof diceInfo.dieRolls !== "number") throw new Error("dieRolls must be a number");

		this.#tableName = diceInfo.tableName;
		this.#diceInfo.dieSides = diceInfo.dieSides;
		this.#diceInfo.dieRolls = diceInfo.dieRolls;

		this.#setTotalRolls();
		this.regenerate();
	}

	// Private Methods
	#setTotalRolls(): void {
		// Roll Once
		if(this.#diceInfo.dieSides === 1 && this.#diceInfo.dieRolls === 1) this.#diceInfo.value = 1;

		// Roll Multiple
		for(let i = 0; i < this.#diceInfo.dieRolls; i++){
			this.#diceInfo.value += new Die(this.#diceInfo.dieSides).value;
		}
	}

	// Items
	regenerate(): this {
		this.#items = [];
		for(let i = 0; i < this.#diceInfo.value; i++){
			const die = new Die(100);
			const item = tables[this.#tableName as keyof LootTables](die.value);

			// A table roll is always a d100, so we just add the value
			this.#items.push({ name: item.name, link: item.link, roll: die.value });
		}

		return this;
	}

	// Get Items
	get items(): Item[] {
		return this.#items;
	}

	// Get Table Name
	get tableName(): string {
		return this.#tableName;
	}

	// Get Dice Info
	get diceInfo() {
		return this.#diceInfo;
	}
}