import Die from 'dnd-dice';
type GEM_PRICE = "g0" | "g10" | "g50" | "g100" | "g500" | "g1000" | "g5000";
type ART_PRICE = "a0" | "a25" | "a250" | "a750" | "a2500" | "a7500";

interface GEM_OBJECTS {
	g0: string[]
	g10: string[]
	g50: string[]
	g100: string[]
	g500: string[]
	g1000: string[]
	g5000: string[]
}

interface ART_OBJECTS {
	a0: string[]
	a25: string[]
	a250: string[]
	a750: string[]
	a2500: string[]
	a7500: string[]
}

const gemObjects: GEM_OBJECTS = {
	g0: [""],
	g10: ["azurite", "banded agate", "blue quartz", "eye agate", "hematite", "lapis lazuli", "malachite", "moss agate", "obsidian", "rhodochrosite", "tiger eye", "turquoise"],
	g50: ["bloodstone", "carnelian", "chalcedony", "chrysoprase", "citrine", "jasper", "moonstone", "onyx", "quartz", "sardonyx", "star rose quartz", "zircon"],
	g100: ["amber", "amethyst", "chrysoberyl", "coral", "garnet", "jade", "jet", "pearl", "spinel", "tourmaline"],
	g500: ["alexandrite", "aquamarine", "black pearl", "blue spinel", "peridot", "topaz"],
	g1000: ["black opal", "blue sapphire", "emerald", "fire opal", "opal", "star ruby", "star sapphire", "yellow sapphire"],
	g5000: ["black sapphire", "diamond", "jacinth", "ruby"]
};

const artObjects: ART_OBJECTS = {
	a0: [""],
	a25: ["silver ewer", "carved bone statuette", "small gold bracelet", "cloth-of-gold vestments", "black velvet mask stiched with silver thread", "copper chalice with silver filigree", "pair of engraved bone dice", "small mirrror set in a painted wooden frame", "embroidered silk handkerchief", "gold locket with a painted portrait inside"],
	a250: ["gold ring set with bloodstones", "carved ivory statuette", "large gold bracelet", "silver necklace with a gemstone pendant", "bronze crown", "silk robe with gold embroidery", "large well-made tapestry", "brass mug with jade inlay", "box of turquoise animal figurines", "gold bird cage with electrum filigree"],
	a750: ["silver chalice set with moonstones", "silver-plated steel longsword with jet set in hilt", "carved harp of exotic wood with ivory inlay and zircon gems", "small gold idol", "gold dragon comb set with red garnets as eyes", "bottle stopper cork embossed with gold leaf and set with amethysts", "ceremonial electrum dagger with a black pearl in the pommel", "silver and gold brooch", "obsidian statuette with gold fittings and inlay", "painted gold war mask"],
	a2500: ["fine gold chain set with a fire opal", "old masterpiece painting", "embroidered silk and velvet mantle set with numerous moonstones", "platinum bracelet set with a sapphire", "embroidered glove set with jewel chips", "jeweled anklet", "gold music box", "gold circlet set with four aquamarines", "eye patch with a mock eye set in blue sapphire and moonstone", "a necklace string of small pink pearls"],
	a7500: ["jeweled gold crown", "jeweled platinum ring", "small gold statuette set with rubies", "gold cup set with emeralds", "gold jewelry box with platinum filigree", "painting set in a gold frame", "ancient gold coins", "gold dragon comb set with red garnets as eyes", "bottle stopper cork embossed with gold leaf and set with amethysts", "ceremonial electrum dagger with a black pearl in the pommel", "silver and gold brooch", "obsidian statuette with gold fittings and inlay", "painted gold war mask"]
};


Object.freeze(gemObjects);
Object.freeze(artObjects);


function checkGemValue(value: number): GEM_PRICE {
	if(value === 0) return "g0";
	if(value === 10) return "g10";
	if(value === 50) return "g50";
	if(value === 100) return "g100";
	if(value === 500) return "g500";
	if(value === 1000) return "g1000";
	if(value === 5000) return "g5000";

	throw new Error(`A gem value was incorrectly set to '${value}'. Please report this issue at: https://github.com/Multarix/DnD-Loot/issues`);
}

function checkArtValue(value: number): ART_PRICE {
	if(value === 0) return "a0";
	if(value === 25) return "a25";
	if(value === 250) return "a250";
	if(value === 750) return "a750";
	if(value === 2500) return "a2500";
	if(value === 7500) return "a7500";

	throw new Error(`An art value was incorrectly set to '${value}'. Please report this issue at: https://github.com/Multarix/DnD-Loot/issues`);
}


/** Base class for gems and art objects */
abstract class gemArt {
	public diceRolls: Die[];

	/** The amount of the item */
	public amount: number;

	/** The cost in gold per item */
	public valuePerItem: number;

	constructor(valuePerItem: number, amount: number, diceRolls: Die[]) {
		this.valuePerItem = valuePerItem;
		this.amount = amount;
		this.diceRolls = diceRolls;
	}
}



/** The gem(s) obtained */
export class GemData extends gemArt {

	/** The type of gems obtained (eg, Obsidian, Ruby) */
	public type: string = "";

	constructor(valuePerItem: number, amount: number, diceRolls: Die[]) {
		super(valuePerItem, amount, diceRolls);
		this.type = this.findValidType();
	}

	/** Finds a valid gem type that matches the given value */
	private findValidType(): string {
		const valueString = checkGemValue(this.valuePerItem);
		const validTypes = gemObjects[valueString];
		const randomIndex = Math.floor(Math.random() * validTypes.length);

		return validTypes[randomIndex];
	}
}



/** The art object(s) obtained */
export class ArtData extends gemArt {

	/** The type of art obtained (eg, Bronze crown, Jeweled anklet) */
	public type: string = "";

	constructor(valuePerItem: number, amount: number, diceRolls: Die[]) {
		super(valuePerItem, amount, diceRolls);
		this.type = this.findValidType();
	}

	/** Finds a valid art type that matches the given value */
	private findValidType(): string {
		const valueString = checkArtValue(this.valuePerItem);
		const validTypes = artObjects[valueString];
		const randomIndex = Math.floor(Math.random() * validTypes.length);

		return validTypes[randomIndex];
	}
}