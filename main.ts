const { randomNumber } = require('../../src/functions.js');


/**
 * @typedef {object} diceObject
 * @property {number} roll The roll
 * @property {string} dice The dice used
**/
/**
 * @typedef {object} TotalMoney
 * @property {number} platinum Total platinum
 * @property {number} gold Total gold
 * @property {number} electrum Total electrum
 * @property {number} silver Total silver
 * @property {number} copper Total copper
 * @description An object containing the total money.
**/
/**
 * @typedef {object} MoneyRolls
 * @property {diceObject[]} platinum Rolls used to obtain platinum
 * @property {diceObject[]} gold Rolls used to obtain gold
 * @property {diceObject[]} electrum Rolls used to obtain electrum
 * @property {diceObject[]} silver Rolls used to obtain silver
 * @property {diceObject[]} copper Rolls used to obtain copper
 * @description An object containing the rolls used to obtain the money.
**/
/**
 * @typedef {object} MoneyModifier
 * @property {number} platinum Modifier used to obtain platinum
 * @property {number} gold Modifier used to obtain gold
 * @property {number} electrum Modifier used to obtain electrum
 * @property {number} silver Modifier used to obtain silver
 * @property {number} copper Modifier used to obtain copper
 * @description An object containing the modifier used to obtain the money.
**/
/**
 * @typedef {object} MoneyObject
 * @property {TotalMoney} coins Total money obtained
 * @property {MoneyRolls} rolls Rolls used to obtain the money
 * @property {MoneyModifier} modifier Modifier used to obtain the money
 * @description An object containing the money and the rolls used to obtain it.
**/


/**
 * @class Loot
 * @description The base class for all loot types.
**/
class Loot {
	
	#challengeLevel;
	
	/**
	 * @name constructor
	 * @param {number} level
	**/
	constructor(level){
		if(level && isNaN(parseInt(level))) throw new TypeError("`level` must be of type number");
		if(level && 0 >= level) throw new RangeError("`level` must be 0 or greater");
		
		this.#challengeLevel = level || 0;
		this.lootClassRolls = {
			percentile: randomNumber(0, 9) * 10,
			d10: randomNumber(1, 10),
		}
		this.lootClassRolls.total = this.lootClassRolls.percentile + this.lootClassRolls.d10;
		
		
		this.money = {
			coins: { platinum: 0, gold: 0, electrum: 0, silver: 0, copper: 0 },
			rolls: { platinum: [], gold: [], electrum: [], silver: [], copper: [] },
			modifier: { platinum: 0, gold: 0, electrum: 0, silver: 0, copper: 0 }
		}
			
		this.items = {}
	}
	
	getChallengeLevel(){ return this.#challengeLevel; }
}


/**
 * @class HoardLoot
 * @description Represents a hoard loot instance.
 * @extends Loot
**/
class HoardLoot extends Loot {
	
	#type;
	
	/**
	 * @name constructor
	 * @param {number} level
	**/
	constructor(level){
		super(level);
		this.#type = "hoard";
		this.money = this.#getMoney();
		this.items = this.#getItems();
	}
		
	
	/**
	 * @name getMoney
	 * @description Returns the money obtained
	 * @returns {MoneyObject}
	**/
	#getMoney(){
		let folder = "";
		switch(this.getChallengeLevel()){
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
				folder = "0-4";
				break;
				
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				folder = "5-10";
				break;
			
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
				folder = "11-16";
				break;
				
			default:
				folder = "17+";
				break;
		}
		
		const pathToFile = `./src/challengeLevels/${folder}/${this.#type}_money.js`;
		const moneyRoll = require(pathToFile);

		return moneyRoll();
	}
	
	
	#getItems(){
		return {};
	}
}


/**
 * @class IndividualLoot
 * @description Represents an individual loot instance.
 * @extends Loot
**/
class IndividualLoot extends Loot {
	
	#type;
	
	/**
	 * @name constructor
	 * @param {number} level
	**/
	constructor(level){
		super(level);
		this.#type = "individual";
		this.money = this.#getMoney();
	}

	
	/**
	 * @name getMoney
	 * @description Returns the money obtained
	 * @returns {MoneyObject}
	**/
	#getMoney(){
		
		let folder = "";
		switch(this.getChallengeLevel()){
			case 1:
			case 2:
			case 3:
			case 4:
				folder = "0-4";
				break;
				
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				folder = "5-10";
				break;
			
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
				folder = "11-16";
				break;
				
			default:
				folder = "17+";
				break;
		}
		
		const pathToFile = `./src/challengeLevels/${folder}/${this.#type}_money.js`;
		const moneyRoll = require(pathToFile);

		return moneyRoll(this.lootClassRolls.total);
	}
}


module.exports = { HoardLoot, IndividualLoot };