import { MagicItem } from "./src/class/MagicItem.js";

import Die from "dnd-dice";
// Interfaces are for objects that are used internally in multiple files.


// Money/ Coins
interface COIN_INFO {
	dice: Die[]
	modifier: number
	total: number
}

interface MONEY_TOTAL {
	copper: COIN_INFO
	silver: COIN_INFO
	gold: COIN_INFO
	electrum: COIN_INFO
	platinum: COIN_INFO
}

// Gems, Art, Magic Items
interface GEM_ART {
	goldCostPer: number,
	quantity: number,
	dice: Die[]
}

interface ITEM_LOOT {
	gems: GEM_ART
	art: GEM_ART
	lootTableResults: MagicItem[]
}

type TABLE_NAME = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";
type DIFFICULTY = "easy" | "medium" | "hard" | "deadly";

export {
	MagicItem,
	Die,
	COIN_INFO,
	MONEY_TOTAL,
	GEM_ART,
	ITEM_LOOT,
	TABLE_NAME,
	DIFFICULTY
};