/**
 * Represents a single die.\
 * Generates a random number between 1 and the number provided.
 * ```js
 * const d = new Die(6);
 * console.log(d.value); // 3
 * console.log(d.faces); // 6
 * ```
 */
export default class Die {

	#numberOffaces: number = 4;
	#rolledValue: number = 1;

	constructor(faces?: number) {
		if(faces && typeof faces === "number") this.#numberOffaces = faces;
		this.#rolledValue = this.#numberGenerator(1, this.#numberOffaces);
	}

	#numberGenerator(min: number, max: number): number {
		if(min >= max) return min;

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/* No need to set value or faces, but they're there if I need them later. */
	protected roll() {
		this.#rolledValue = this.#numberGenerator(1, this.#numberOffaces);
	}

	protected set setFaces(numfaces: number) {
		this.#numberOffaces = numfaces;
		this.roll(); // Roll the die again as we changed the number of die faces
	}

	get value() {
		return this.#rolledValue;
	}

	get faces() {
		return this.#numberOffaces;
	}
}