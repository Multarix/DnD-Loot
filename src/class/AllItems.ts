import hoardItems04 from "../challengeLevels/0-4/hoard_items.js";
import hoardItems510 from "../challengeLevels/5-10/hoard_items.js";
import hoardItems1116 from "../challengeLevels/11-16/hoard_items.js";
import hoardItems17 from "../challengeLevels/17+/hoard_items.js";

import { GemData, ArtData } from "./GemArt.js";

// Interfaces & TypeDefs
import { MagicItem } from './MagicItem.js';
import { DIFFICULTY, ITEM_LOOT } from '../../interfaces.js';

interface DIFFICULTY_LEVELS {
	easy: Function
	medium: Function
	hard: Function
	deadly: Function
}

const challengeRating: DIFFICULTY_LEVELS = {
	easy: hoardItems04,
	medium: hoardItems510,
	hard: hoardItems1116,
	deadly: hoardItems17
};


/** All the items obtained */
export default class AllItems {

	#difficulty: DIFFICULTY;
	#lootTier: number;

	#gems: GemData;
	#art: ArtData;
	#magicItems: MagicItem[];

	constructor(difficulty: DIFFICULTY, lootTier: number) {
		this.#difficulty = difficulty;
		this.#lootTier = lootTier;

		const items: ITEM_LOOT = challengeRating[this.#difficulty](this.#lootTier);

		this.#magicItems = items.lootTableResults;
		this.#gems = new GemData(items.gems.goldCostPer, items.gems.quantity, items.gems.dice);
		this.#art = new ArtData(items.art.goldCostPer, items.art.quantity, items.art.dice);
	}

	/** The gem(s) obtained */
	public get gems(): GemData {
		return this.#gems;
	}

	/** The art object(s) obtained */
	public get art(): ArtData {
		return this.#art;
	}

	/** An array of obtained magic items */
	public get magicItems(): MagicItem[] {
		return this.#magicItems;
	}

	/** Rerolls the items obtained */
	public reroll(): void {
		const items: ITEM_LOOT = challengeRating[this.#difficulty](this.#lootTier);

		this.#magicItems = items.lootTableResults;
		this.#gems = new GemData(items.gems.goldCostPer, items.gems.quantity, items.gems.dice);
		this.#art = new ArtData(items.art.goldCostPer, items.art.quantity, items.art.dice);
	}
}