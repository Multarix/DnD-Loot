import TableLoot, { TableName, DieInstance, LootTables, Item, TableRollInfo, TableRollSetter } from "./src/helperFunctions/tableRoll.js";
export { TableLoot, TableName, DieInstance, LootTables, Item, TableRollInfo, TableRollSetter };

export interface MoneyData {
	rolls: DieInstance[]
	modifier: number
	total: number
}

export interface Money {
	copper: MoneyData
	silver: MoneyData
	electrum: MoneyData
	gold: MoneyData
	platinum: MoneyData
}

export interface Gems {
	quantity: number
	goldCostPer: number
	rolls: DieInstance[]
}

export interface Art {
	quantity: number
	goldCostPer: number
	rolls: DieInstance[]
}

export interface ItemLoot {
	gems: Gems
	art: Art
	lootTableResults: TableLoot[]
}

export interface AllLoot extends ItemLoot {
	money: Money
}

export interface LootRolls {
	percentile: number
	d10: number
	total: number
}