/// <reference no-default-lib="true"/>

/** @rbxts set */
interface ReadonlySet<T> extends Iterable<T> {
	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(this: ReadonlySet<T>): boolean;

	/**
	 * Returns a string representation of this data structure.
	 */
	toString(this: ReadonlySet<T>): string;

	/**
	 * Performs the specified action for each (element / pair of elements) in the set
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array.
	 */
	forEach(this: ReadonlySet<T>, callbackfn: (value: T, value2: T, self: ReadonlySet<T>) => void): void;

	/**
	 * Returns the number of elements in the set
	 */
	size(this: ReadonlySet<T>): number;

	/**
	 * Returns an array with all values of this set
	 */
	values(this: ReadonlySet<T>): Array<T>;

	/**
	 * Returns a boolean for whether the given key exists in the set
	 */
	has(this: ReadonlySet<T>, value: T): boolean;

	/**
	 * Returns a new set with every element that occurs at least once in either `this` or a given set
	 */
	union<U>(this: ReadonlySet<T>, set: ReadonlySet<U>): Set<T | U>;

	/**
	 * Returns a new set with every element that occurs in both `this` and a given set
	 */
	intersect<U>(this: ReadonlySet<T>, set: ReadonlySet<U>): Set<T | U>;

	/**
	 * Returns a new set which is the result of subtracting a given set from `this`
	 */
	difference<U>(this: ReadonlySet<T>, set: ReadonlySet<U>): Set<T | U>;

	/**
	 * Returns true if `this` and a given set have no elements in common, else false.
	 */
	isDisjointWith(this: ReadonlySet<T>, set: ReadonlySet<T>): boolean;

	/**
	 * Returns a boolean for whether `this` is a subset of a given set.
	 *
	 * Note: Every set is a subset of itself, so this will return true for identical sets.
	 * A "proper subset" relationship can be checked via:
	 * ```ts
set1.isSubsetOf(set2) && !set2.isSubsetOf(set1)
```
	 */
	isSubsetOf(this: ReadonlySet<T>, set: ReadonlySet<T>): boolean;
}

interface ReadonlySetConstructor {
	new <T>(values?: ReadonlyArray<T>): ReadonlySet<T>;
}
declare const ReadonlySet: ReadonlySetConstructor;

/** @rbxts set */
interface Set<T> extends ReadonlySet<T> {
	/**
	 * Adds a value to the set
	 */
	add(this: Set<T>, value: T): this;

	/**
	 * Deletes the given key from the set.
	 *
	 * Returns a boolean indicating whether or not a value was removed.
	 */
	delete(this: Set<T>, value: T): boolean;

	/**
	 * Deletes all members of the set.
	 */
	clear(this: Set<T>): void;
}

interface SetConstructor {
	new <T>(values?: ReadonlyArray<T>): Set<T>;
}
declare const Set: SetConstructor;

/**
 * A Set object with its `__mode` metamethod set to "k"
 * @rbxts set
 */
interface WeakSet<T extends object> extends Set<T> {}

interface WeakSetConstructor {
	new <T extends object>(values?: ReadonlyArray<T>): WeakSet<T>;
}
declare const WeakSet: WeakSetConstructor;
