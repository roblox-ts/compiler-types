/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>
/// <reference path="Array.d.ts" />
/// <reference path="callMacros.d.ts" />
/// <reference path="Iterable.d.ts" />
/// <reference path="Map.d.ts" />
/// <reference path="Promise.d.ts" />
/// <reference path="Set.d.ts" />
/// <reference path="String.d.ts" />
/// <reference path="Symbol.d.ts" />
/// <reference path="typeUtils.d.ts" />

/** unknown - undefined = defined */
type defined = {};

/**
 * **DO NOT USE!** This type only exists because TypeScript requires it!
 *
 * **Use `boolean` instead!**
 */
interface Boolean {}
/** **DO NOT USE!** This type only exists because TypeScript requires it! */
interface IArguments {}
/**
 * **DO NOT USE!** This type only exists because TypeScript requires it!
 *
 * **Use `number` instead!**
 */
interface Number {}
interface Object {}
/** **DO NOT USE!** This type only exists because TypeScript requires it! */
interface RegExp {}
/**
 * **DO NOT USE!** This type only exists because TypeScript requires it!
 *
 * **Use the arrow function form instead!**
 *
 * For example,`(a: string, b: number) => boolean` represents a function that takes a `string` and a `number` and
 * returns a `boolean`.
 *
 * More generally, `(a: A, b: B, c: C) => R`, where `A`, `B`, and `C` are different function argument types and `R` is
 * the return type.
 *
 * You can use `void` as a return type for functions that do not return anything: `() => void`
 */
interface Function {
	prototype: never;
}
/** **DO NOT USE!** This type only exists because TypeScript requires it! */
interface CallableFunction extends Function {}
/** **DO NOT USE!** This type only exists because TypeScript requires it! */
interface NewableFunction extends Function {}

/** Marker for contextual 'this' type */
interface ThisType<T> {}

/** A function type which is assignable to any other function type (and any function is assignable to). */
type Callback = (...args: Array<any>) => any;

type LuaTuple<T extends Array<any>> = T & { readonly LUA_TUPLE: never };

type FilterMembers<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

/** Similar to Pick, but instead turns excluded values to undefined (so they can still be browsed) */
type PresentFields<T, K extends keyof T> = { [P in keyof T]: P extends K ? T[P] : undefined };

/** When a member (M) of T is a particular Value (E), Pick<K> */
type FieldsPresentWhen<T, M extends keyof T, E extends T[M], K extends keyof T> = {
	[P in keyof T]: P extends M ? E : P extends K ? T[P] : undefined;
};

/** Given an object `T`, returns a unioned type of all non-readonly property names. */
type WritableProperties<T> = {
	[K in keyof T]-?: T[K] extends Callback
		? never
		: (<F>() => F extends { [Q in K]: T[K] } ? 1 : 2) extends <F>() => F extends {
				-readonly [Q in K]: T[K];
		  }
				? 1
				: 2
		? K
		: never;
}[keyof T];

/** Given an object `T`, returns a partial object definition containing only the writable properties of `T` */
type PartialProperties<T> = Partial<Pick<T, WritableProperties<T>>>;

/** A mapping between Instance ClassNames and corresponding types with `ClassName` narrowed, if necessary.
 * For example, A `Part` type could mean a `SpawnLocation`, a `Seat`, or an object whose ClassName is "Part".
 * Thus, `StrictInstances["Part"]` gives `Part & { ClassName: "Part" }` for when you want a `Part` whose ClassName is "Part".
 */
type StrictInstances = {
	[K in Exclude<keyof Instances, keyof AbstractInstances>]: Instances[K] &
		(Instances[K]["ClassName"] extends K ? unknown : { ClassName: K });
};

/** For a given Instance type (with intersections) this returns the type without intersections. */
type OriginalInstanceType<T extends Instance> = T extends any
	? T["ClassName"] extends infer A
		? T["ClassName"] extends infer B
			? (A extends any ? (B extends A ? true : false) : never) extends true
				? A extends keyof Instances
					? Instances[A] // Grab our raw ClassName if there is only one possibility (either StrictInstance or classes which are not superclasses for anything)
					: never
				: Instances[{
						// Otherwise, iterate through Instances and grab the class with the "ClassName" property which matches T's exactly
						[K in keyof Instances]: T["ClassName"] extends Instances[K]["ClassName"]
							? Instances[K]["ClassName"] extends T["ClassName"]
								? K
								: never
							: never;
				  }[keyof Instances]]
			: never
		: never
	: never;

/** Given an Instance `T`, returns a unioned type of all property names, except "ClassName". */
type InstanceProperties<I extends Instance> = OriginalInstanceType<I> extends infer T
	? {
			[K in keyof T]-?: K extends "ClassName" | "Changed" | "BreakJoints" | "MakeJoints"
				? never
				: T[K] extends RBXScriptSignal | Callback
				? never
				: K;
	  }[keyof T]
	: never;

/** Given an Instance `T`, returns a unioned type of all non-readonly property names. */
type WritableInstanceProperties<I extends Instance> = Extract<WritableProperties<OriginalInstanceType<I>>, keyof I>;

/** Given an Instance `T`, returns an object which can hold the writable properties of T. Good to use with `Object.assign`.
 * @example
 * const props: PartialInstance<Part> = {
 * 	Size: new Vector3(),
 * 	Anchored: false,
 * }
 *
 * Object.assign(new Instance("Part"), props);
 */
type PartialInstance<T extends Instance> = Partial<Pick<T, WritableInstanceProperties<T>>>;

// temporary backwards compatibility:

/** @deprecated */
type GetProperties<T extends Instance> = InstanceProperties<T>;

/** @deprecated */
type GetWritableProperties<T extends Instance> = WritableInstanceProperties<T>;

/** Returns a given objects parameters in a tuple. Defaults to `[]` */
type FunctionArguments<T> = T extends (...args: infer U) => void ? U : [];
