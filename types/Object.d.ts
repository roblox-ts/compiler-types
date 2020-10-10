/// <reference no-default-lib="true"/>

interface ObjectConstructor {
	/**
	 * Copy the values of all of the enumerable own properties from one or more source objects to a target object.
	 * Returns the target object.
	 */
	assign<A, B>(this: ObjectConstructor, target: A, source: B): A & B;
	assign<A, B, C>(this: ObjectConstructor, target: A, source1: B, source2: C): A & B & C;
	assign<A, B, C, D>(this: ObjectConstructor, target: A, source1: B, source2: C, source3: D): A & B & C & D;
	assign<A, B, C, D, E>(
		this: ObjectConstructor,
		target: A,
		source1: B,
		source2: C,
		source3: D,
		source4: E,
	): A & B & C & D & E;
	assign<A, B, C, D, E, F>(
		this: ObjectConstructor,
		target: A,
		source1: B,
		source2: C,
		source3: D,
		source4: E,
		source5: F,
	): A & B & C & D & E & F;
	assign(this: ObjectConstructor, target: object, ...sources: Array<any>): any;

	/**
	 * Returns the names of the enumerable properties and methods of an object.
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	keys<T extends object>(
		this: ObjectConstructor,
		o: T,
	): T extends Array<any>
		? Array<number>
		: T extends ReadonlySet<infer U>
		? Array<U>
		: T extends ReadonlyMap<infer K, any>
		? Array<K>
		: T extends ArrayLike<any>
		? Array<number>
		: keyof T extends never
		? Array<unknown>
		: Array<keyof T>;

	/**
	 * Returns an array of values of the enumerable properties of an object
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	values<T extends object>(
		this: ObjectConstructor,
		o: T,
	): T extends Array<infer U>
		? Array<NonNullable<U>>
		: T extends ReadonlySet<any>
		? Array<true>
		: T extends ReadonlyMap<any, infer V>
		? Array<NonNullable<V>>
		: T extends ArrayLike<infer W>
		? Array<NonNullable<W>>
		: keyof T extends never
		? Array<unknown>
		: Array<NonNullable<T[keyof T]>>;

	/**
	 * Returns an array of key/values of the enumerable properties of an object
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	entries<T extends object>(
		this: ObjectConstructor,
		o: T,
	): T extends Array<infer U>
		? Array<[number, NonNullable<U>]>
		: T extends ReadonlySet<infer E>
		? Array<[E, true]>
		: T extends ReadonlyMap<infer K, infer V>
		? Array<[K, NonNullable<V>]>
		: T extends ArrayLike<infer W>
		? Array<[number, NonNullable<W>]>
		: keyof T extends never
		? Array<[unknown, unknown]>
		: Array<[keyof T, NonNullable<T[keyof T]>]>;

	/** Creates an object from a set of entries */
	fromEntries<P extends readonly [string | number | symbol, unknown]>(
		this: ObjectConstructor,
		i: ReadonlyArray<P>,
	): Reconstruct<
		UnionToIntersection<
			P extends unknown
				? {
						[k in P[0]]: P[1];
				  }
				: never
		>
	>;

	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(this: ObjectConstructor, o: object): boolean;

	/**
	 * Returns a shallow copy of the object
	 */
	copy<T extends object>(this: ObjectConstructor, o: T): T;

	/**
	 * Returns a deep copy of the object
	 */
	deepCopy<T extends object>(this: ObjectConstructor, o: T): T;

	/**
	 * Returns true if
	 * - each member of `a` equals each member of `b`
	 * - `b` has no members that do not exist in `a`.
	 *
	 * Searches recursively.
	 */
	deepEquals(this: ObjectConstructor, a: object, b: object): boolean;
}

/**
 * Provides functionality common to all JavaScript objects.
 */
declare const Object: ObjectConstructor;
