import tableA from '../magicItemTables/MagicItemTableA.js';
import tableB from '../magicItemTables/MagicItemTableB.js';
import tableC from '../magicItemTables/MagicItemTableC.js';
import tableD from '../magicItemTables/MagicItemTableD.js';
import tableE from '../magicItemTables/MagicItemTableE.js';
import tableF from '../magicItemTables/MagicItemTableF.js';
import tableG from '../magicItemTables/MagicItemTableG.js';
import tableH from '../magicItemTables/MagicItemTableH.js';
import tableI from '../magicItemTables/MagicItemTableI.js';

import { MagicItem } from "../class/MagicItem.js";
import Die, { D100 } from "dnd-dice";

import { TABLE_NAME } from "../../interfaces.js";

interface LOOT_TABLES {
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

const lootTables: LOOT_TABLES = {
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


interface TableRollInfo {
	dieSides: number
	dieRolls: number
	tableName: TABLE_NAME;
}

/**
 * @param tables An array of tables to roll on */
function magicItemRoller(...tables: TableRollInfo[]): MagicItem[] {
	const obtainedItems: MagicItem[] = [];

	for(const table of tables){
		const { dieSides, dieRolls, tableName } = table;

		// Find the max amount of rolls to do
		let maxRolls = 0;
		if(dieSides === 1 && dieRolls === 1){
			maxRolls = 1;
		} else {
			// Do it this way because `new Die()` doesn't like 1 sided dice (I mean, it would just be 1)
			for(let i = 0; i < dieRolls; i++){
				maxRolls += new Die(dieSides).value;
			}
		}

		// Roll for items
		for(let i = 0; i < maxRolls; i++){
			const die = new D100();
			const item = lootTables[tableName](die.value);
			const magicItem = new MagicItem(item.name, item.link, die, tableName);

			obtainedItems.push(magicItem);
		}
	}

	return obtainedItems;
}


export default magicItemRoller;

// Roll 4 d6 times
// eg:
// 3
// 2
// 5
// 4