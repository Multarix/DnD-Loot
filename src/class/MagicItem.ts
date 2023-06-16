import { Die, TABLE_NAME } from "../../interfaces.js";

/** Represents a single magic item */
export class MagicItem {

	/** The name of the item */
	public name: string;

	/** An URL to the item on D&D Beyond */
	public link: string;

	/** The die used to roll for the item */
	public die: Die;

	/** The table the item is from */
	public table: TABLE_NAME;

	constructor(itemName: string, itemLink: string, die: Die, table: TABLE_NAME) {
		this.name = itemName;
		this.link = itemLink;
		this.die = die;
		this.table = table;
	}
}