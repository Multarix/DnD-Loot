import { D8 } from "dnd-dice";

function figRoll() {
	const d8 = new D8();
	const value = d8.getValue;
	if(value <= 1) return { "name": "Figurine of Wondrous Power (Bronze Griffon)", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-bronze-griffon" };
	if(value <= 2) return { "name": "Figurine of Wondrous Power (Ebony Fly)", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-ebony-fly" };
	if(value <= 3) return { "name": "Figurine of Wondrous Power (Golden Lions)", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-golden-lions" };
	if(value <= 4) return { "name": "Figurine of Wondrous Power (Ivory Goats)", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-ivory-goats" };
	if(value <= 5) return { "name": "Figurine of Wondrous Power (Marble Elephant)", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-marble-elephant" };
	if(value <= 7) return { "name": "Figurine of Wondrous Power (Onyx Dog)", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-onyx-dog" };
	return { "name": "Figurine of Wondrous Power (Serpentine Owl)", "link":"https://www.dndbeyond.com/magic-items/figurine-of-wondrous-power-serpentine-owl" };
}

function roll(num: number) {
	if(num <= 11) return { "name": "+2 Weapon", "link":"https://www.dndbeyond.com/magic-items/weapon-2" };
	if(num <= 14) return figRoll();
	if(num <= 15) return { "name": "Adamantine Armor (Breastplate)", "link":"https://www.dndbeyond.com/magic-items/adamantine-armor" };
	if(num <= 16) return { "name": "Adamantine Armor (Splint)", "link":"https://www.dndbeyond.com/magic-items/adamantine-armor" };
	if(num <= 17) return { "name": "Amulet of Health", "link":"https://www.dndbeyond.com/magic-items/amulet-of-health" };
	if(num <= 18) return { "name": "Armor of Vulnerability", "link":"https://www.dndbeyond.com/magic-items/armor-of-vulnerability" };
	if(num <= 19) return { "name": "Arrow-Catching Shield", "link":"https://www.dndbeyond.com/magic-items/arrow-catching-shield" };
	if(num <= 20) return { "name": "Belt of Dwarvenkind", "link":"https://www.dndbeyond.com/magic-items/belt-of-dwarvenkind" };
	if(num <= 21) return { "name": "Belt of Hill Giant Strength", "link":"https://www.dndbeyond.com/magic-items/belt-of-hill-giant-strength" };
	if(num <= 22) return { "name": "Berserker Axe", "link":"https://www.dndbeyond.com/magic-items/berserker-axe" };
	if(num <= 23) return { "name": "Boots of Levitation", "link":"https://www.dndbeyond.com/magic-items/boots-of-levitation" };
	if(num <= 24) return { "name": "Boots of Speed", "link":"https://www.dndbeyond.com/magic-items/boots-of-speed" };
	if(num <= 25) return { "name": "Bowl of Commanding Water Elementals", "link":"https://www.dndbeyond.com/magic-items/bowl-of-commanding-water-elementals" };
	if(num <= 26) return { "name": "Bracers of Defense", "link":"https://www.dndbeyond.com/magic-items/bracers-of-defense" };
	if(num <= 27) return { "name": "Brazier of Commanding Fire Elementals", "link":"https://www.dndbeyond.com/magic-items/brazier-of-commanding-fire-elementals" };
	if(num <= 28) return { "name": "Cape of the Mountebank", "link":"https://www.dndbeyond.com/magic-items/cape-of-the-mountebank" };
	if(num <= 29) return { "name": "Censer of Controlling Air Elementals", "link":"https://www.dndbeyond.com/magic-items/censer-of-controlling-air-elementals" };
	if(num <= 30) return { "name": "Armor, +1 Chain Mail", "link":"https://www.dndbeyond.com/magic-items/armor-1" };
	if(num <= 31) return { "name": "Armor of Resistance (Chain Mail)", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" };
	if(num <= 32) return { "name": "Armor of Resistance (Chain Shirt)", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" };
	if(num <= 33) return { "name": "Armor, +1 Chain Shirt", "link":"https://www.dndbeyond.com/magic-items/armor-1" };
	if(num <= 34) return { "name": "Cloak of Displacement", "link":"https://www.dndbeyond.com/magic-items/cloak-of-displacement" };
	if(num <= 35) return { "name": "Cloak of the Bat", "link":"https://www.dndbeyond.com/magic-items/cloak-of-the-bat" };
	if(num <= 36) return { "name": "Cube of Force", "link":"https://www.dndbeyond.com/magic-items/cube-of-force" };
	if(num <= 37) return { "name": "Daern's Instant Fortress", "link":"https://aversten.obsidianportal.com/wiki_pages/daerns-instant-fortress" };
	if(num <= 38) return { "name": "Dagger of Venom", "link":"https://www.dndbeyond.com/magic-items/dagger-of-venom" };
	if(num <= 39) return { "name": "Dimensional Shackles", "link":"https://www.dndbeyond.com/magic-items/dimensional-shackles" };
	if(num <= 40) return { "name": "Dragon Slayer", "link":"https://www.dndbeyond.com/magic-items/dragon-slayer" };
	if(num <= 41) return { "name": "Elven Chain", "link":"https://www.dndbeyond.com/magic-items/elven-chain" };
	if(num <= 42) return { "name": "Flame Tongue", "link":"https://www.dndbeyond.com/magic-items/flame-tongue" };
	if(num <= 43) return { "name": "Gem of Seeing", "link":"https://www.dndbeyond.com/magic-items/gem-of-seeing" };
	if(num <= 44) return { "name": "Giant Slayer", "link":"https://www.dndbeyond.com/magic-items/giant-slayer" };
	if(num <= 45) return { "name": "Glamoured Studded Leather", "link":"https://www.dndbeyond.com/magic-items/glamoured-studded-leather" };
	if(num <= 46) return { "name": "Helm of Teleportation", "link":"https://www.dndbeyond.com/magic-items/helm-of-teleportation" };
	if(num <= 47) return { "name": "Horn of Blasting", "link":"https://www.dndbeyond.com/magic-items/horn-of-blasting" };
	if(num <= 48) return { "name": "Horn of Valhalla (Silver or Brass)", "link":"https://www.dndbeyond.com/magic-items/horn-of-valhalla" };
	if(num <= 49) return { "name": "Instrument of the Bards (Canaith Mandolin)", "link":"https://aversten.obsidianportal.com/wiki_pages/instrument-of-the-bards" };
	if(num <= 50) return { "name": "Instrument of the Bards (Cli Lyre)", "link":"https://aversten.obsidianportal.com/wiki_pages/instrument-of-the-bards" };
	if(num <= 51) return { "name": "Ioun Stone (Awareness)", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-awareness" };
	if(num <= 52) return { "name": "Ioun Stone (Protection)", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-protection" };
	if(num <= 53) return { "name": "Ioun Stone (Reserve)", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-reserve" };
	if(num <= 54) return { "name": "Ioun Stone (Sustenance)", "link":"https://www.dndbeyond.com/magic-items/ioun-stone-sustenance" };
	if(num <= 55) return { "name": "Iron Bands of Bilarro", "link":"https://www.dndbeyond.com/magic-items/iron-bands-of-bilarro" };
	if(num <= 56) return { "name": "Armor, +1 Leather", "link":"https://www.dndbeyond.com/magic-items/armor-1" };
	if(num <= 57) return { "name": "Armor of Resistance (Leather)", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" };
	if(num <= 58) return { "name": "Mace of Disruption", "link":"https://www.dndbeyond.com/magic-items/mace-of-disruption" };
	if(num <= 59) return { "name": "Mace of Smiting", "link":"https://www.dndbeyond.com/magic-items/mace-of-smiting" };
	if(num <= 60) return { "name": "Mace of Terror", "link":"https://www.dndbeyond.com/magic-items/mace-of-terror" };
	if(num <= 61) return { "name": "Mantle of Spell Resistance", "link":"https://www.dndbeyond.com/magic-items/mantle-of-spell-resistance" };
	if(num <= 62) return { "name": "Necklace of Prayer Beads", "link":"https://www.dndbeyond.com/magic-items/necklace-of-prayer-beads" };
	if(num <= 63) return { "name": "Periapt of Proof Against Poison", "link":"https://www.dndbeyond.com/magic-items/periapt-of-proof-against-poison" };
	if(num <= 64) return { "name": "Ring of Animal Influence", "link":"https://www.dndbeyond.com/magic-items/ring-of-animal-influence" };
	if(num <= 65) return { "name": "Ring of Evasion", "link":"https://www.dndbeyond.com/magic-items/ring-of-evasion" };
	if(num <= 66) return { "name": "Ring of Feather Falling", "link":"https://www.dndbeyond.com/magic-items/ring-of-feather-falling" };
	if(num <= 67) return { "name": "Ring of Free Action", "link":"https://www.dndbeyond.com/magic-items/ring-of-free-action" };
	if(num <= 68) return { "name": "Ring of Protection", "link":"https://www.dndbeyond.com/magic-items/ring-of-protection" };
	if(num <= 69) return { "name": "Ring of Resistance", "link":"https://www.dndbeyond.com/magic-items/ring-of-resistance" };
	if(num <= 70) return { "name": "Ring of Spell Storing", "link":"https://www.dndbeyond.com/magic-items/ring-of-spell-storing" };
	if(num <= 71) return { "name": "Ring of the Ram", "link":"https://www.dndbeyond.com/magic-items/ring-of-the-ram" };
	if(num <= 72) return { "name": "Ring of X-Ray Vision", "link":"https://www.dndbeyond.com/magic-items/ring-of-x-ray-vision" };
	if(num <= 73) return { "name": "Robe of Eyes", "link":"https://www.dndbeyond.com/magic-items/robe-of-eyes" };
	if(num <= 74) return { "name": "Rod of Rulership", "link":"https://www.dndbeyond.com/magic-items/rod-of-rulership" };
	if(num <= 75) return { "name": "+2 Rod of the Pact Keeper", "link":"https://www.dndbeyond.com/magic-items/rod-of-the-pact-keeper" };
	if(num <= 76) return { "name": "Rope of Entanglement", "link":"https://www.dndbeyond.com/magic-items/rope-of-entanglement" };
	if(num <= 77) return { "name": "Armor, +1 Scale Mail", "link":"https://www.dndbeyond.com/magic-items/armor-1" };
	if(num <= 78) return { "name": "Armor of Resistance (Scale Mail)", "link":"https://www.dndbeyond.com/magic-items/armor-of-resistance" };
	if(num <= 79) return { "name": "+2 Shield", "link":"https://www.dndbeyond.com/magic-items/shield-2" };
	if(num <= 80) return { "name": "Shield of Missile Attraction", "link":"https://www.dndbeyond.com/magic-items/shield-of-missile-attraction" };
	if(num <= 81) return { "name": "Staff of Charming", "link":"https://www.dndbeyond.com/magic-items/staff-of-charming" };
	if(num <= 82) return { "name": "Staff of Healing", "link":"https://www.dndbeyond.com/magic-items/staff-of-healing" };
	if(num <= 83) return { "name": "Staff of Swarming Insects", "link":"https://www.dndbeyond.com/magic-items/staff-of-swarming-insects" };
	if(num <= 84) return { "name": "Staff of the Woodlands", "link":"https://www.dndbeyond.com/magic-items/staff-of-the-woodlands" };
	if(num <= 85) return { "name": "Staff of Withering", "link":"https://www.dndbeyond.com/magic-items/staff-of-withering" };
	if(num <= 86) return { "name": "Stone of Controlling Earth Elementals", "link":"https://www.dndbeyond.com/magic-items/stone-of-controlling-earth-elementals" };
	if(num <= 87) return { "name": "Sun Blade", "link":"https://www.dndbeyond.com/magic-items/sun-blade" };
	if(num <= 88) return { "name": "Sword of Life Stealing", "link":"https://www.dndbeyond.com/magic-items/sword-of-life-stealing" };
	if(num <= 89) return { "name": "Sword of Wounding", "link":"https://www.dndbeyond.com/magic-items/sword-of-wounding" };
	if(num <= 90) return { "name": "Tentacle Rod", "link":"https://www.dndbeyond.com/magic-items/tentacle-rod" };
	if(num <= 91) return { "name": "Vicious Weapon", "link":"https://www.dndbeyond.com/magic-items/vicious-weapon" };
	if(num <= 92) return { "name": "Wand of Binding", "link":"https://www.dndbeyond.com/magic-items/wand-of-binding" };
	if(num <= 93) return { "name": "Wand of Enemy Detection", "link":"https://www.dndbeyond.com/magic-items/wand-of-enemy-detection" };
	if(num <= 94) return { "name": "Wand of Fear", "link":"https://www.dndbeyond.com/magic-items/wand-of-fear" };
	if(num <= 95) return { "name": "Wand of Fireballs", "link":"https://www.dndbeyond.com/magic-items/wand-of-fireballs" };
	if(num <= 96) return { "name": "Wand of Lightning Bolts", "link":"https://www.dndbeyond.com/magic-items/wand-of-lightning-bolts" };
	if(num <= 97) return { "name": "Wand of Paralysis", "link":"https://www.dndbeyond.com/magic-items/wand-of-paralysis" };
	if(num <= 98) return { "name": "+2 Wand of the War Mage", "link":"https://www.dndbeyond.com/magic-items/wand-of-the-war-mage" };
	if(num <= 99) return { "name": "Wand of Wonder", "link":"https://www.dndbeyond.com/magic-items/wand-of-wonder" };
	return { "name": "Wings of Flying", "link":"https://www.dndbeyond.com/magic-items/wings-of-flying" };
}


export default roll;