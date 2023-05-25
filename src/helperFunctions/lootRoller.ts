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
import { Item, Tables } from '../../interfaces.js';



const tables = {
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
 * @name lootRoller
 * @param {number} rolls The number of dice rolls to do
 * @param {number} dieMax What type of die to use
 * @param {string} table The table to roll on
 * @returns {Item[]}
**/
function lootRoller(rolls: number, dieMax: number, table: string): Item[] {
	const rollArray: Item[] = [];

	let tableDieRolls = `${rolls} d${dieMax} rolls`;
	if(dieMax === 1) tableDieRolls = "Roll once";

	// Check if the table exists
	if(!tables[table as keyof Tables]) return rollArray;

	// Get how many rolls on the table we do
	let tableRolls = 0;
	for(let i = 0; i < rolls; i++){
		const roll = numberGenerator(1, dieMax);
		tableRolls += roll;
	}

	// Roll on the table
	for(let i = 0; i < tableRolls; i++){
		// Roll 1 to 100 and get the item from the table
		const roll = numberGenerator(1, 100);
		const item = tables[table as keyof Tables](roll);

		rollArray.push({ name: item.name, link: item.link, fromTable: table, tableDie: tableDieRolls, diceInfo: { roll, die: "d100" } });
	}

	return rollArray;
}


export default lootRoller;