export interface DiceObject {
	roll: number
	die: string
}

export interface TotalMoney {
	platinum: number
	gold: number
	electrum: number
	silver: number
	copper: number
}

export interface MoneyRolls {
	platinum: DiceObject[]
	gold: DiceObject[]
	electrum: DiceObject[]
	silver: DiceObject[]
	copper: DiceObject[]
}

export interface MoneyModifier {
	platinum: number
	gold: number
	electrum: number
	silver: number
	copper: number
}

export interface MoneyObject {
	coins: TotalMoney
	rolls: MoneyRolls
	modifier: MoneyModifier
}


export interface Tables {
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
	fromTable: string
	tableDie: string
	diceInfo: DiceObject
}

export type TableArray = Item[];


export interface GemsArtResults {
	gems: GemData
	art: ArtData
	items: TableArray[]
}

export interface ArtData {
	gpCostPer: number
	amount: number
	rolls: DiceObject[]
}

export interface GemData {
	gpCostPer: number
	amount: number
	rolls: DiceObject[]
}

export interface AllLoot {
	gems: GemData
	art: ArtData
	items: TableArray[]
}

export interface LootClassRolls {
	percentile: number
	d10: number
	total: number
}