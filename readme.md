[![NPM](https://nodei.co/npm/dnd-loot.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dnd-loot/)

DnD-Loot is a [Node.js](https://nodejs.org) module that allows you to easily generate loot for individual or hoard encounters.<br>

# **Usage:**
There are two encounter types: `Hoard` & `Individual`.<br>
```js
import { Hoard, Individual } from 'dnd-loot';
const hoardLoot = new Hoard();
const indvidualLoot = new Individual();
```
By passing a number into the constructor, you can specify the challenge rating of the encounter.<br>
If you fail to specify a challenge rating, the loot generation will default to a challenge rating of `0`.<br>
```js
import { Hoard, Individual } from 'dnd-loot';

const challengeRating = 12;

const hoardLoot = new Hoard(challengeRating);
const indvidualLoot = new Individual(challengeRating);
```
If you're unfamiliar with how loot rolling normally works; just because an encounter has a higher challenge rating, doesn't mean it will have better loot.<br>
<br>
For example, loot from certain groups of challenge ratings will all result in the same loot calculations.<br>
The groupings are as follows:<br>
- 0 - 4
- 5 - 10
- 11 - 16
- 17+

Of course, on top of this, there is also the RNG to consider when generating loot. Good rolls on a lower grouping may result in better loot than if you had rolled badly on a higher grouping. There is a large amount of variation that can occur.

# Addional Information
If you want details about class methods/ properties please check the [documentation](https://projects.multarix.com/project/loot/).<br>

---


# **Need help?**
If you need any extra help, feel free to hit me up on [discord](https://discord.gg/UHUCNG9TEV).<br>
If you've encountered a bug or would like to suggest a feature, feel free to create either a pull request or an issue on the [github](https://github.com/Multarix/dnd-loot).