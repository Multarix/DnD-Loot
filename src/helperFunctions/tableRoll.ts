import numberGenerator from './numberGenerator.js';
import tableA from '../magicItemTables/MagicItemTableA.js';
import tableB from '../magicItemTables/MagicItemTableB.js';
import tableC from '../magicItemTables/MagicItemTableC.js';
import tableD from '../magicItemTables/MagicItemTableD.js';
import tableE from '../magicItemTables/MagicItemTableE.js';
import tableF from '../magicItemTables/MagicItemTableF.js';
import tableG from '../magicItemTables/MagicItemTableG.js';
import tableH from '../magicItemTables/MagicItemTableH.js';
import tableI from '../magicItemTables/MagicItemTableI.js';


const d100 = numberGenerator.bind(null, 1, 100);
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



export type TableName = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";

// An instance of a dice roll
export interface DieInstance {
	dieSides: number
	value: number
}

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



export default class TableRoll {

	#tableName: string = "a";
	#diceInfo = { dieSides: 1, dieRolls: 1, value: 0 };
	#items: Item[] = [];

	constructor(diceInfo: TableRollInfo) {
		if(!diceInfo.tableName || !diceInfo.dieSides || !diceInfo.dieRolls) throw new Error("Constructor requires a object with the properties: tableName, dieSides, dieRolls");
		if(typeof diceInfo.tableName !== "string") throw new Error("tableName must be a string");
		if(typeof diceInfo.dieSides !== "number") throw new Error("dieSides must be a number");
		if(typeof diceInfo.dieRolls !== "number") throw new Error("dieRolls must be a number");

		this.#tableName = diceInfo.tableName;
		this.#diceInfo.dieSides = diceInfo.dieSides;
		this.#diceInfo.dieRolls = diceInfo.dieRolls;

		this.#getTotalRolls();
		this.regenerate();
	}

	// Private Methods
	#getTotalRolls(): void {
		// Roll Once
		if(this.#diceInfo.dieSides === 1 && this.#diceInfo.dieRolls === 1) this.#diceInfo.value = 1;

		// Roll Multiple
		for(let i = 0; i < this.#diceInfo.dieRolls; i++){
			this.#diceInfo.value += numberGenerator(1, this.#diceInfo.dieSides);
		}
	}

	// Items
	regenerate(): this {
		this.#items = [];
		for(let i = 0; i < this.#diceInfo.value; i++){
			const roll = d100();
			const item = tables[this.#tableName as keyof LootTables](roll);

			this.#items.push({ name: item.name, link: item.link, roll: roll });
		}

		return this;
	}

	get items(): Item[] {
		return this.#items;
	}

	// Table Name
	get tableName(): string {
		return this.#tableName;
	}

	// Dice Info
	get diceInfo() {
		return this.#diceInfo;
	}
}