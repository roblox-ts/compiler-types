/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

interface String extends Iterable<string> {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_String: unique symbol;

	/** the current number of bytes in the string */
	size(this: string): number;

	/**
	 * returns the byte at a zero-based index as a one-byte string
	 *
	 * negative, fractional, and out-of-range indices return `undefined`
	 * a byte from a multibyte UTF-8 character may not be valid UTF-8 on its own
	 * string iteration and array destructuring operate on Unicode code points
	 */
	readonly [n: number]: string;
}
