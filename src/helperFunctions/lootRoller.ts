import TableRoll from '../classes/tableRoll.js';
import { TableRollInfo } from '../../interfaces.js';

/**
 * @name lootRoller
 * @param {TableRollInfo[]} tables An array of tables to roll on
 * @returns {Item[]}
**/
function lootRoller(tables: TableRollInfo[] | TableRollInfo): TableRoll[] {
	const tableArray: TableRoll[] = [];

	if(Array.isArray(tables)){
		for(const tableInfo of tables){
			const tableObject = new TableRoll(tableInfo);
			tableArray.push(tableObject);
		}
	} else {
		const tableObject = new TableRoll(tables);
		tableArray.push(tableObject);
	}

	return tableArray;
}


export default lootRoller;