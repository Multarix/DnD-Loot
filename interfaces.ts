import Die from "./src/classes/die.js";
import TableLoot, { TableName, LootTables, Item, TableRollInfo, TableRollSetter } from "./src/classes/tableRoll.js";


type Dice = Die[]
interface MoneyData {
	dice: Dice
	modifier: number
	total: number
}

interface Money {
	copper: MoneyData
	silver: MoneyData
	electrum: MoneyData
	gold: MoneyData
	platinum: MoneyData
}

interface Gems {
	quantity: number
	goldCostPer: number
	dice: Dice
}

interface Art {
	quantity: number
	goldCostPer: number
	dice: Dice
}

interface ItemLoot {
	gems: Gems
	art: Art
	lootTableResults: TableLoot[]
}

interface AllLoot extends ItemLoot {
	money: Money
}

interface LootRolls {
	percentile: Die
	d10: Die
	total: number
}

export {
	Die,
	Dice,
	TableLoot,
	TableName,
	LootTables,
	Item,
	TableRollInfo,
	TableRollSetter,
	MoneyData,
	Money,
	Gems,
	Art,
	ItemLoot,
	AllLoot,
	LootRolls
};