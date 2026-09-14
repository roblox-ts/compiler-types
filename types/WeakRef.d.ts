/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

/**
 * A WeakRef object is a reference to an object that does not prevent the object from being garbage collected.
 * Note that references to Roblox instances are never weak.
 */
interface WeakRef<T extends object> {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_WeakRef: unique symbol;

	/**
	 * Returns the WeakRef instance's target value, or undefined if the target value has been reclaimed.
	 */
	deref(): T | undefined;
}

interface WeakRefConstructor {
	/**
	 * Creates a WeakRef instance for the given target value.
	 * @param target The target value for the WeakRef instance.
	 */
	new <T extends object>(target: T): WeakRef<T>;
}
declare const WeakRef: WeakRefConstructor;
